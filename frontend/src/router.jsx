import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/app/register",
    element: <Register />,
  },
  {
    path: "/app/login",
    element: <Login />,
  },
]);
