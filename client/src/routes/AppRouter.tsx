import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import NotFound from "../pages/NotFound";

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
        ></Route>

        <Route
          path="/auth"
          element={
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
