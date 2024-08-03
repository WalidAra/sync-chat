/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { config } from "../../utils";

const Middleware = ({ children }: { children: React.ReactNode }) => {
  
  const { token } = useAuth();
  const { pathname } = useLocation();
  const [lastChatId, setLastChatId] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    const getLastChat = async () => {
      try {
        const res = await useFetch({
          feature: "/user",
          method: "GET",
          endPoint: "/lastChat",
          token: token,
        });

        if (res.status === true) {
          setLastChatId(res.data);
        }
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsValid(true);
      }
    };

    if (token) {
      getLastChat();
    } else {
      setIsValid(true); 
    }
  }, [token]);

  if (!isValid) {
    return null; 
  }

  if (!token) {
    if (!config.public.some((path) => pathname.startsWith(path))) {
      return <Navigate to="/auth/login" />;
    }
  } else {

    if (config.public.some((path) => pathname.startsWith(path)) && !lastChatId) {
      return <Navigate to="/" />;
    } else if (
      lastChatId &&
      (pathname === "/" || config.public.includes(pathname))
    ) {
      return <Navigate to={`/chats/${lastChatId}`} />;
    }
  }

  return <>{children}</>;
};

export default Middleware;
