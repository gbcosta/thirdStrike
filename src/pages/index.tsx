import interfaceImg from "../assets/character selection/interface.png";
import akumaPortrait from "../assets/character selection/akumaScreen.gif";
import chunPortrait from "../assets/character selection/cunScreen.gif";
import alexPortrait from "../assets/character selection/alexScreen.gif";
import yunPortrait from "../assets/character selection/yunScreen.gif";
import urienPortrait from "../assets/character selection/urienScreen.gif";
import seanPortrait from "../assets/character selection/seanScreen.gif";
import remyPortait from "../assets/character selection/remyScreen.gif";
import qPortrait from "../assets/character selection/qScreen.gif";
import necroPortrait from "../assets/character selection/necroScreen.gif";
import kenPortrait from "../assets/character selection/kenScreen.gif";
import hugoPortrait from "../assets/character selection/hugoScreen.gif";
import elenaPortrait from "../assets/character selection/elenaScreen.gif";
import ibukiPortrait from "../assets/character selection/ibukiScreeen.gif";
import dudleyPortrait from "../assets/character selection/dudelyScreen.gif";
import oroPortrait from "../assets/character selection/oroScreen.gif";
import ryuPortrait from "../assets/character selection/ryuScreen.gif";
import yangPortrait from "../assets/character selection/yangScreen.gif";
import twelvePortrait from "../assets/character selection/twelveScreen.gif";
import makotoPortrait from "../assets/character selection/makotoScreen.gif";
import kenSf2Idle from "../assets/character selection/ken-sf2-idle.jpeg";
import kenSf2Win from "../assets/character selection/ken-sf2-win.jpeg";

import { MouseEvent, useState } from "react";

type PortraitsMap = {
  [key: string]: string;
};

const portrais: PortraitsMap = {
  chun: chunPortrait,
  akuma: akumaPortrait,
  alex: alexPortrait,
  yun: yunPortrait,
  urien: urienPortrait,
  sean: seanPortrait,
  remy: remyPortait,
  q: qPortrait,
  necro: necroPortrait,
  ibuki: ibukiPortrait,
  ken: kenPortrait,
  hugo: hugoPortrait,
  elena: elenaPortrait,
  dudley: dudleyPortrait,
  oro: oroPortrait,
  ryu: ryuPortrait,
  yang: yangPortrait,
  twelve: twelvePortrait,
  makoto: makotoPortrait,
};

const CharacterSelection = () => {
  const [portrait, setPortrait] = useState(alexPortrait);

  const onMouseOverHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    setPortrait(portrais[id]);
  };

  return (
    <div className="justify-center flex w-[960px] h-[560px] mt-20">
      <div className="w-full z-[1] relative">
        <div className="z-30 w-[768px] absolute top-0 left-[230px]">
          <img src={interfaceImg} className="w-[960px] h-[560px]" />
        </div>
        <a
          onMouseOver={onMouseOverHandler}
          id="alex"
          className="z-50 absolute w-[82px] h-[56px] top-alexTop left-alexLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="sean"
          className="z-50 absolute w-[82px] h-[56px] top-seanTop left-seanLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="ibuki"
          className="z-50 absolute w-[82px] h-[56px] top-ibukiTop left-ibukiLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="necro"
          className="z-50 absolute w-[82px] h-[56px] top-necroTop left-necroLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="urien"
          className="z-50 absolute w-[82px] h-[56px] top-urienTop left-urienLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="akuma"
          className="z-50 absolute w-[82px] h-[56px] top-akumaTop left-akumaLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="yang"
          className="z-50 absolute w-[82px] h-[56px] top-yangTop left-yangLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="twelve"
          className="z-50 absolute w-[82px] h-[56px] top-twelveTop left-twelveLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="makoto"
          className="z-50 absolute w-[82px] h-[56px] top-makotoTop left-makotoLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="chun"
          className="z-50 absolute w-[82px] h-[56px] top-chunTop left-chunLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="q"
          className="z-50 absolute w-[82px] h-[56px] top-qTop left-qLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="remy"
          className="z-50 absolute w-[82px] h-[56px] top-remyTop left-remyLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="yun"
          className="z-50 absolute w-[82px] h-[56px] top-yunTop left-yunLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="ken"
          className="z-50 absolute w-[82px] h-[56px] top-kenTop left-kenLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="hugo"
          className="z-50 absolute w-[82px] h-[56px] top-hugoTop left-hugoLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="elena"
          className="z-50 absolute w-[82px] h-[56px] top-elenaTop left-elenaLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="dudley"
          className="z-50 absolute w-[82px] h-[56px] top-dudleyTop left-dudleyLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="oro"
          className="z-50 absolute w-[82px] h-[56px] top-oroTop left-oroLeft cursor-pointer"
        />
        <a
          onMouseOver={onMouseOverHandler}
          id="ryu"
          className="z-50 absolute w-[82px] h-[56px] top-ryuTop left-ryuLeft cursor-pointer"
        />
        <img
          src={portrait}
          className="z-0 
                    absolute w-[1212px] h-[615px] left-[-300px] top-[-60px] bg-clip-content"
        />
      </div>
    </div>
  );
  // [clip-path:polygon(26.3%_9%,100%_9%,100%_100%,26.3%_100%)]
};

const IndexButton = () => {
  const [image, setImage] = useState(kenSf2Idle);
  return (
    <div
      onMouseOver={(e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setImage(kenSf2Win);
      }}
      onMouseOut={(e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setImage(kenSf2Idle);
      }}
      className="max-h-48 max-w-72 w-full h-48 bg-white relative overflow-hidden flex items-end rounded-sm cursor-pointer group"
    >
      <img
        src={image}
        className="absolute z-0 object-cover w-full h-full rounded-sm
                transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="z-0 absolute bg-black h-full w-full opacity-50 top-0 left-0" />
      <span className="text-white z-50 relative p-2 text-xl font-bold">
        Scare's Content
      </span>
    </div>
  );
};

export const Index = () => {
  return (
    <div className="w-screen min-h-screen bg-zinc-950 pt-10 flex flex-col items-center">
      <CharacterSelection />
      <div className="flex flex-row gap-12 mt-8 w-full justify-center">
        <IndexButton />
        <IndexButton />
        <IndexButton />
      </div>
    </div>
  );
};
