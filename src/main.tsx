import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./App.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
