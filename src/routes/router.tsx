import { createBrowserRouter, Link } from "react-router-dom";
import Root from "./root";
import Guides from "../pages/guides";
import { ErrorPage } from "../pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Guides",
        element: <Guides />,
      },
    ],
  },
]);

export default router;
