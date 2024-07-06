import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout>
              <Outlet />
            </HomeLayout>
          }
        >
          <Route index element={<Home />} />
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
    </Router>
  );
};

export default AppRouter;
