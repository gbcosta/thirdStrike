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
import mapBrasil from "../assets/map-brasil.png";
import mapWorld from "../assets/mapWorld.png";
import selector from "../assets/selector.gif";

import { MouseEvent, useState } from "react";

const characterSelectionData: Map<
  string,
  { portrait: string; top: string; left: string }
> = new Map([
  ["chun", { portrait: chunPortrait, top: "204px", left: "755px" }],
  ["akuma", { portrait: akumaPortrait, top: "38px", left: "745px" }],
  ["alex", { portrait: alexPortrait, top: "352px", left: "625px" }],
  ["yun", { portrait: yunPortrait, top: "18px", left: "828px" }],
  ["urien", { portrait: urienPortrait, top: "100px", left: "721px" }],
  ["sean", { portrait: seanPortrait, top: "287px", left: "650px" }],
  ["remy", { portrait: remyPortait, top: "78px", left: "805px" }],
  ["q", { portrait: qPortrait, top: "145px", left: "785px" }],
  ["necro", { portrait: necroPortrait, top: "164px", left: "697px" }],
  ["ibuki", { portrait: ibukiPortrait, top: "228px", left: "675px" }],
  ["ken", { portrait: kenPortrait, top: "370px", left: "770px" }],
  ["hugo", { portrait: hugoPortrait, top: "305px", left: "789px" }],
  ["elena", { portrait: elenaPortrait, top: "247px", left: "813px" }],
  [
    "dudley",
    {
      portrait: dudleyPortrait,
      top: "180px",
      left: "842px",
    },
  ],
  ["oro", { portrait: oroPortrait, top: "118px", left: "861px" }],
  ["ryu", { portrait: ryuPortrait, top: "58px", left: "890px" }],
  ["yang", { portrait: yangPortrait, top: "390px", left: "690px" }],
  [
    "twelve",
    {
      portrait: twelvePortrait,
      top: "330px",
      left: "708px",
    },
  ],
  [
    "makoto",
    {
      portrait: makotoPortrait,
      top: "268px",
      left: "731px",
    },
  ],
]);

const CharacterIcon = ({
  setCharacterData,
  data,
}: {
  setCharacterData: React.Dispatch<
    React.SetStateAction<
      | {
          portrait: string;
          top: string;
          left: string;
        }
      | undefined
    >
  >;
  data: {
    portrait: string;
    top: string;
    left: string;
  };
}) => {
  const onMouseOverHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCharacterData(data);
  };

  return (
    <a
      onMouseOver={onMouseOverHandler}
      style={{
        top: data.top,
        left: data.left,
      }}
      className="z-50 absolute w-[82px] h-[65px] cursor-pointer"
    />
  );
};

const CharacterSelection = () => {
  const [characterData, setCharacterData] = useState(
    characterSelectionData.get("alex"),
  );
  return (
    <div className="justify-center flex w-[960px] h-[560px] mt-[4.5rem]">
      <div className="w-full z-[1] relative">
        <div className="z-30 w-[768px] absolute top-0 left-[230px]">
          <img src={interfaceImg} className="w-[960px] h-[560px]" />
        </div>
        {Array.from(characterSelectionData.entries()).map(([key, value]) => {
          console.log(value);
          return (
            <CharacterIcon
              setCharacterData={setCharacterData}
              key={key}
              data={value}
            />
          );
        })}
        <img
          src={characterData?.portrait}
          className="z-0 
                    absolute w-[1212px] h-[615px] left-[-300px] top-[-60px] bg-clip-content
                    [clip-path:polygon(26.3%_9%,100%_9%,100%_100%,26.3%_100%)]"
        />
        <img
          src={selector}
          style={{
            top: characterData?.top,
            left: characterData?.left,
          }}
          className="z-[100] absolute w-[82px] h-[72px] cursor-pointer"
        />
      </div>
    </div>
  );
  // [clip-path:polygon(26.3%_9%,100%_9%,100%_100%,26.3%_100%)]
};

const IndexButton = ({
  children,
  img,
  zoomImg,
}: {
  children: string;
  img: string;
  zoomImg: string;
}) => {
  const [image, setImage] = useState(img);
  return (
    <div
      onMouseOver={(e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setImage(zoomImg);
      }}
      onMouseOut={(e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setImage(img);
      }}
      className="max-h-48 max-w-72 w-full h-48 bg-white relative overflow-hidden
            flex justify-center items-end rounded-sm cursor-pointer group
            border-[2px] border-[#3B3FE9] border-solid "
    >
      <img
        src={image}
        className="absolute z-0 object-cover w-full h-full rounded-sm
                    transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="z-0 absolute bg-black h-full w-full opacity-60 top-0 left-0 " />
      <span className="text-white z-50 relative p-2 text-[1.5rem] font-bold mb-2 font-metropolis">
        {children}
      </span>
    </div>
  );
};

export const Index = () => {
  return (
    <div className="w-screen min-h-screen bg-zinc-950 pt-10 flex flex-col items-center">
      <CharacterSelection />
      <div className="flex flex-row gap-12 mt-8 w-full justify-center">
        <IndexButton img={kenSf2Idle} zoomImg={kenSf2Win}>
          Conteúdo do Scare
        </IndexButton>
        <IndexButton img={mapBrasil} zoomImg={mapWorld}>
          Conteúdo/Recursos
        </IndexButton>
        <IndexButton img={mapBrasil} zoomImg={mapWorld}>
          Conteúdo Externo
        </IndexButton>
      </div>
    </div>
  );
};
