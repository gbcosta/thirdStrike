import { createBrowserRouter, Link } from "react-router-dom";
import Menu from "../components/menu";
import Personagens from "../pages/personagens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "personagens",
    element: <Personagens />,
  },
]);

export default router;
