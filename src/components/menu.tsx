import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="flex flex-row p-2 font-bold text-black bg-white items-center shadow-md">
      <Link to="/" className="ml-4 cursor-pointer text-xl">
        3S
      </Link>
      <div className="flex flex-row ml-16 font-bold cursor-pointer gap-6">
        <Link to={"/thirdStrike/guides"}>Guides</Link>
        <Link to={"/thirdStrike/recursos"}>Recursos</Link>
        <Link to={"/thirdStrike/matchups"}>Matchups</Link>
      </div>
    </div>
  );
};

export default Menu;
