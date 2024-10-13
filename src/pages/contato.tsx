import urienImg from "../assets/sobre/q.png";
import urienShadowImg from "../assets/sobre/q-shadow.png";

import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const KofiIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916m-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963s1.832 3.011.723 4.311m6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015"
      ></path>
    </svg>
  );
};

const Card = ({ children }: { children: Array<JSX.Element> }) => {
  return (
    <div
      className="bg-gray-200 p-4 flex border-zinc-300 border-[1px] border-solid
            flex-col items-center justify-center w-[250px] h-[250px] z-50"
    >
      {children}
    </div>
  );
};

export const Contato = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full pt-32 bg-black font-metropolis min-h-screen flex flex-col">
      <h1 className="text-5xl text-white text-center">Contato</h1>
      <div className="flex flex-col items-center mt-4 relative">
        <img src={urienImg} className="max-w-[300px]" />
        <img src={urienShadowImg} className="absolute top-[318px] z-10 " />
        <div
          style={{
            borderRight: `${windowDimensions.width / 2 - 125}px solid transparent`,
            borderLeft: `${windowDimensions.width / 2 - 125}px solid  transparent`,
          }}
          className="w-screen h-0 border-b-[200px] border-white
                    border-solid text-black"
        ></div>
      </div>
      <div className="bg-white flex-grow w-full flex">
        <div className="flex flex-row text-black bg-white w-full justify-center gap-24 mt-4 ">
          <Card>
            <FaDiscord className="text-8xl text-[#7289da]" />
            <p className="text-xl"> scarecrow5676.</p>
          </Card>
          <Card>
            <KofiIcon className="text-8xl text-pink-400" />
            <p className="text-xl">KO-FI</p>
          </Card>
          <Card>
            <MdEmail className="text-8xl text-blue-500" />
            <p className="text-xl">Email</p>
          </Card>
          <Card>
            <FaYoutube className="text-8xl text-red-600 " />
            <p className="text-xl">Youtube</p>
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
