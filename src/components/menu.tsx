import { Link } from "react-router-dom";
import bwLogo from "../assets/bw2.png";
const ButtonMenu = ({ to, children }: { to: string; children: string }) => {
  return (
    <Link to={to}>
      <span className="hover:text-indigo-500 transition-colors duration-300 ease-in-out">
        {children}
      </span>
    </Link>
  );
};
const Menu = () => {
  return (
    <div
      className="flex flex-row font-bold text-white w-screen px-24 max-h-36 py-3
            items-center shadow-md fixed z-40 bg-slate-900 justify-between"
    >
      <div>
        <Link
          to="/thirdStrike"
          className="ml-4 cursor-pointer text-2xl flex flex-row gap-6 items-center"
        >
          <img src={bwLogo} className="w-24" />
          <span className="text-4xl text-indigo-600">Blue Wolves</span>
        </Link>
      </div>

      <div className="flex flex-row ml-16 font-bold cursor-pointer gap-12 text-xl">
        <ButtonMenu to={"/thirdStrike/guides"}>GUIDES</ButtonMenu>
        <ButtonMenu to={"/thirdStrike/recursos"}>RECURSOS</ButtonMenu>
        <ButtonMenu to={"/thirdStrike/matchups"}>MATCHUPS</ButtonMenu>
      </div>
    </div>
  );
};

export default Menu;
