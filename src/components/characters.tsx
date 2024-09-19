import alexImg from "../assets/alex-3so.jpg";
import chunLiImage from "../assets/chunli-3so.jpg";
import ryuImg from "../assets/ryu-3so.jpg";
import yunImg from "../assets/yun-3so.jpg";
import yangImg from "../assets/yang-3so.jpg";
import kenImg from "../assets/kenmasters-3so.jpg";
import makotoImg from "../assets/makoto-3so.jpg";
import ibukiImg from "../assets/ibuki-3so.jpg";
import qImg from "../assets/q-3so.jpg";
import oroImg from "../assets/oro-3so.jpg";
import seanImg from "../assets/sean-3so.jpg";
import hugoImg from "../assets/hugo-3so.jpg";
import elenaImg from "../assets/elena-3so.jpg";
import dudleyImg from "../assets/dudley-3so.jpg";
import remyImg from "../assets/remy-3so.jpg";
import necroImg from "../assets/necro-3so.jpg";
import twelveImg from "../assets/twelve-3so.jpg";
import urienImg from "../assets/urien-3so.jpg";
import goukiImg from "../assets/akuma-3so.jpg";
import { useNavigate } from "react-router-dom";

const CharacterItem = ({
  img,
  name,
  link,
}: {
  img: string;
  name: string;
  link: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="text-center gap-4 relative flex flex-col border-2 group
            justify-center items-center cursor-pointer"
      onClick={() => navigate(`${link}/${name}`)}
    >
      <span
        className="text-white text-2xl absolute font-bold opacity-0 
                group-hover:opacity-100 z-20"
      >
        {name}
      </span>
      <div className="bg-black absolute h-full w-full group-hover:opacity-75 opacity-0 top-0 left-0 text-white"></div>
      <img src={img} className="object-cover h-full" />
    </div>
  );
};

const Characters = ({ link }: { link: string }) => {
  return (
    <div className="grid grid-cols-10  gap-1 p-4 h-screen bg-zinc-900">
      <CharacterItem img={alexImg} name="Alex" link={link} />
      <CharacterItem img={chunLiImage} name="Chun Li" link={link} />
      <CharacterItem img={ryuImg} name="Ryu" link={link} />
      <CharacterItem img={yunImg} name="Yun" link={link} />
      <CharacterItem img={yangImg} name="Yang" link={link} />
      <CharacterItem img={kenImg} name="Ken" link={link} />
      <CharacterItem img={makotoImg} name="Makoto" link={link} />
      <CharacterItem img={ibukiImg} name="Ibuki" link={link} />
      <CharacterItem img={seanImg} name="Sean" link={link} />
      <CharacterItem img={qImg} name="Q" link={link} />
      <CharacterItem img={oroImg} name="Oro" link={link} />
      <CharacterItem img={hugoImg} name="Hugo" link={link} />
      <CharacterItem img={elenaImg} name="Elena" link={link} />
      <CharacterItem img={dudleyImg} name="Dudley" link={link} />
      <CharacterItem img={remyImg} name="Remy" link={link} />
      <CharacterItem img={necroImg} name="Necro" link={link} />
      <CharacterItem img={twelveImg} name="Twelve" link={link} />
      <CharacterItem img={urienImg} name="Urien" link={link} />
      <CharacterItem img={goukiImg} name="Gouki" link={link} />
    </div>
  );
};

export default Characters;
