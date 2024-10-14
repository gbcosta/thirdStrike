import { MouseEvent } from "react";
import { useState } from "react";

export const HomeButton = ({
  children,
  img,
  zoomImg,
  top,
  height,
}: {
  children: string;
  img: string;
  zoomImg: string;
  top?: number;
  height?: string;
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
        style={{ top: top ?? 0, height: height ?? "100%" }}
        src={image}
        className="absolute z-0 object-cover w-full rounded-sm
                    transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="z-0 absolute bg-black h-full w-full opacity-60 left-0 " />
      <span className="text-white z-50 relative p-2 text-[1.25rem] font-bold  font-metropolis">
        {children}
      </span>
    </div>
  );
};
