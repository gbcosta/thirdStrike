import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div
      className="flex flex-row p-2 font-bold text-white w-screen px-12
            items-center shadow-md fixed z-40 bg-blue-950 top-0 left-1/2 -translate-x-1/2"
    >
      <Link to="/thirdStrike" className="ml-4 cursor-pointer text-2xl">
        BW
      </Link>
      <div className="flex flex-row ml-16 font-bold cursor-pointer gap-6 text-lg">
        <Link to={"/thirdStrike/guides"}>Guides</Link>
        <Link to={"/thirdStrike/recursos"}>Recursos</Link>
        <Link to={"/thirdStrike/matchups"}>Matchups</Link>
      </div>
    </div>
  );
};

export default Menu;
