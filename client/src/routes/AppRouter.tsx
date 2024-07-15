/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import NotFound from "../pages/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ConversationPanel from "../pages/ConversationPanel";
import Middleware from "../components/utils/Middleware";
import ProfileProvider from "../providers/ProfileProvider";

const AppRouter = () => {
  return (
    <Router>
      <Middleware>
        <ProfileProvider>
          <Routes>
            <Route
              path="/"
              element={
                <HomeLayout>
                  <Outlet />
                </HomeLayout>
              }
            >
              <Route path="chats/:chatId" element={<ConversationPanel />} />
            </Route>

            <Route
              path="/auth"
              element={
                <AuthLayout>
                  <Outlet />
                </AuthLayout>
              }
            >
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProfileProvider>
      </Middleware>
    </Router>
  );
};

export default AppRouter;
