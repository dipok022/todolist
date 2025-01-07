import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
