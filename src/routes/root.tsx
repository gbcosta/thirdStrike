import { Outlet } from "react-router-dom";
import Menu from "../components/menu.tsx";

const Root = () => {
  return (
    <>
      <Menu />
      <div className="w-full justify-center flex bg-black">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
