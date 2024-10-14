import { Outlet } from "react-router-dom";
import Menu from "../components/menu.tsx";

const Root = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Menu />
      <div className="w-full justify-center flex bg-black flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
