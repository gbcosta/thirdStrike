import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Card } from "../components/card";
import { KofiIcon } from "../components/kofiIcon.tsx";
import bgImage from "../assets/contato/uriaahhhhhhhhh.png";

export const Contato = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
      className="w-full flex-grow pt-12 font-metropolis flex flex-col"
    >
      <h1 className="text-5xl text-white text-center">CONTATO</h1>
      <div className="flex flex-col items-center mt-4 relative"></div>
      <div className="flex-grow w-full flex items-end mb-12">
        <div className="flex flex-row text-black w-full justify-center gap-24">
          <Card>
            <FaDiscord className="text-8xl text-[#7289da]" />
            <p className="text-xl"> scarecrow5676</p>
          </Card>
          <Card>
            <KofiIcon className="text-8xl text-pink-400" />
            <p className="text-xl">KO-FI</p>
          </Card>
          <Card>
            <MdEmail className="text-8xl text-blue-500" />
            <p className="text-xl">EMAIL</p>
          </Card>
          <Card>
            <FaYoutube className="text-8xl text-red-600 " />
            <p className="text-xl">YOUTUBE</p>
          </Card>
        </div>
      </div>
    </div>
  );
  /*<p>SERVER DO DISCORD: Entrar em contato com scarecrow5676.</p>
          <p>KO-FI: https://ko-fi.com/bluewolves</p>
          <p>E-MAIL: bluewolves3rd@gmail.com</p>
          <p>YOUTUBE: https://www.youtube.com/@bluewolves8855</p>*/
};
