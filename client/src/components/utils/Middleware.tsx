/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const config = {
  matchers: ["/auth/login", "/auth/register", "/"],
};

const Middleware = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();
  const { pathname } = useLocation();
  const [lastChatId, setLastChatId] = useState<string | null>(null);

  useEffect(() => {
    const getLastChat = async () => {
      const res = await useFetch({
        feature: "/user",
        method: "GET",
        endPoint: "/lastChat",
        token: token,
      });

      if (res.status === true) {
        setLastChatId(res.data);
      }
    };

    if (token) {
      getLastChat();
    }
  }, [token]);

  if (!token) {
    if (pathname !== "/auth/login" && pathname !== "/auth/register") {
      return <Navigate to="/auth/login" />;
    }
  } else {
    if (config.matchers.includes(pathname) && lastChatId) {
      return <Navigate to={`/chats/${lastChatId}`} />;
    } else if (pathname.includes("chats") && lastChatId === null) {
      return <Navigate to="/" />;
    }
  }

  return <>{children}</>;
};

export default Middleware;