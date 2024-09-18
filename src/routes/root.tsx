import { Outlet } from "react-router-dom";
import Menu from "../components/menu.tsx";

const Root = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

export default Root;
