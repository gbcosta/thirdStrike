import { MouseEvent } from "react";
import { selectionScreenData } from "../utils/selectionScreenData";
import interfaceImg from "../assets/character selection/interface.png";
import selector from "../assets/selector.gif";
import { useState } from "react";

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

export const SelectionScreen = () => {
  const [characterData, setCharacterData] = useState(
    selectionScreenData.get("alex"),
  );
  return (
    <div className="justify-center flex w-[960px] h-[560px]">
      <div className="w-full z-[1] relative">
        <div className="z-30 w-[768px] absolute top-0 left-[230px]">
          <img src={interfaceImg} className="w-[960px] h-[560px]" />
        </div>
        {Array.from(selectionScreenData.entries()).map(([key, value]) => {
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
};
