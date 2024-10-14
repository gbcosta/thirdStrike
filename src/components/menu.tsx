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
      className="font-bold text-white w-screen h-20 py-3 flex top-0
            items-center shadow-md sticky bg-[#0b0b3d] font-pRegular justify-center z-[100]"
    >
      <div className="flex flex-row justify-between items-center 2xl:w-[1320px]">
        <div>
          <Link
            to="/thirdStrike"
            className="ml-4 cursor-pointer text-2xl flex flex-row gap-6 items-center"
          >
            <img src={bwLogo} className="w-20" />
            <span className="text-[6pt] text-[#3B3FE9]">BLUE WOLVES</span>
          </Link>
        </div>

        <div className="flex flex-row mr-[-7rem] font-bold cursor-pointer gap-12 text-[3.5pt]">
          <ButtonMenu to={"/thirdStrike/faq"}>FAQ</ButtonMenu>
          <ButtonMenu to={"/thirdStrike/sobrenos"}>SOBRE NÒS</ButtonMenu>
          <ButtonMenu to={"/thirdStrike/contato"}>CONTATO</ButtonMenu>
        </div>
      </div>
    </div>
  );
};

export default Menu;
