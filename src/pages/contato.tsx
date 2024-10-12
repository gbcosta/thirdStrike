import leftImg from "../assets/sobre/q.png";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

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
        <img src={leftImg} className="max-w-[300px]" />
        <div
          style={{
            borderRight: `${windowDimensions.width / 2 - 125}px solid transparent`,
            borderLeft: `${windowDimensions.width / 2 - 125}px solid  transparent`,
          }}
          className="w-screen h-0 border-b-[150px] border-white
                    border-solid text-black"
        >
          <div className="flex flex-col text-black bg-white w-full">
            <p>SERVER DO DISCORD: Entrar em contato com scarecrow5676.</p>
            <p>KO-FI: https://ko-fi.com/bluewolves</p>
            <p>E-MAIL: bluewolves3rd@gmail.com</p>
            <p>YOUTUBE: https://www.youtube.com/@bluewolves8855</p>
            <p>SERVER DO DISCORD: Entrar em contato com scarecrow5676.</p>
          </div>
        </div>
      </div>
      <div className="bg-white flex-grow w-full"></div>
    </div>
  );
};
