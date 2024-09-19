import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="flex flex-row p-2 font-bold text-black bg-white items-center shadow-md">
      <Link to="/" className="ml-4 cursor-pointer text-xl">
        3S
      </Link>
      <div className="flex flex-row ml-16 font-bold cursor-pointer gap-6">
        <Link to={"/guides"}>Guides</Link>
        <Link to={"/recursos"}>Recursos</Link>
      </div>
    </div>
  );
};

export default Menu;
