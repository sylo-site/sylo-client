import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App.js";
import { Login } from "./containers/Authentication/UserLogin/Login.jsx";
import Signup from "./containers/Authentication/UserLogin/SignUp.jsx";
import { UserDashBoard } from "./containers/Dashboard/user.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/dashboard",
    element: <UserDashBoard />,
  },
  {
    path: "*",
    element: <h2>Page Not Found</h2>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);
