import { createBrowserRouter, Link } from "react-router-dom";
import Personagens from "../pages/personagens";
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/personagens",
        element: <Personagens />,
      },
    ],
  },
]);

export default router;
