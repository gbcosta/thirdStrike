import { Link } from "react-router-dom";
import bwLogo from "../assets/bw2.png";
const ButtonMenu = ({ to, children }: { to: string; children: string }) => {
  return (
    <Link to={to}>
      <span className="hover:text-[#453cf0] transition-colors duration-300 ease-in-out">
        {children}
      </span>
    </Link>
  );
};
const Menu = () => {
  return (
    <div
      className="flex flex-row font-bold text-white w-screen pl-72 pr-56 max-h-36 py-3
            items-center shadow-md fixed z-40 bg-[#0b0b3d] justify-between"
    >
      <div>
        <Link
          to="/thirdStrike"
          className="ml-4 cursor-pointer text-2xl flex flex-row gap-6 items-center"
        >
          <img src={bwLogo} className="w-20" />
          <span className="text-5xl text-[#3B3FE9]">BLUE WOLVES</span>
        </Link>
      </div>

      <div className="flex flex-row ml-16 font-bold cursor-pointer gap-12 text-3xl">
        <ButtonMenu to={"/thirdStrike/guides"}>GUIDES</ButtonMenu>
        <ButtonMenu to={"/thirdStrike/recursos"}>RECURSOS</ButtonMenu>
        <ButtonMenu to={"/thirdStrike/matchups"}>MATCHUPS</ButtonMenu>
      </div>
    </div>
  );
};

export default Menu;
