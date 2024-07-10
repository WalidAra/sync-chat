/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const config = {
  matchers: ["/auth/login", "/auth/register", "/"],
};

const Middleware = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();
  const { pathname } = useLocation();
  // add async function to get last message of user

  if (!token) {
    if (pathname !== "/auth/login" && pathname !== "/auth/register") {
      return <Navigate to={"/auth/login"} />;
    }
  } else {
    if (config.matchers.includes(pathname)) {
      // modify chatId with actual dynamic value
      return <Navigate to={"/chats/chatId"} />;
    }
  }
  return <>{children}</>;
};

export default Middleware;
