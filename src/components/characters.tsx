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

const CharacterItem = ({
  img,
  name,
  link,
}: {
  img: string;
  name: string;
  link?: string;
}) => {
  return (
    <div
      className="text-center gap-4 relative flex flex-col border-2 group
            justify-center items-center cursor-pointer"
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

interface CharactersProps {
  links?: {
    alex: string;
    chun: string;
    oro: string;
    ryu: string;
    yun: string;
    yang: string;
    ken: string;
    makoto: string;
    ibuki: string;
    sean: string;
    q: string;
    hugo: string;
    elena: string;
    dudley: string;
    remy: string;
    necro: string;
    twelve: string;
    urien: string;
    gouki: string;
  };
}
const Characters = (props: CharactersProps) => {
  return (
    <div className="grid grid-cols-10  gap-1 p-4 h-screen bg-zinc-900">
      <CharacterItem img={alexImg} name="Alex" link={props.links?.alex} />
      <CharacterItem
        img={chunLiImage}
        name="Chun Li"
        link={props.links?.chun}
      />
      <CharacterItem img={ryuImg} name="Ryu" link={props.links?.ryu} />
      <CharacterItem img={yunImg} name="Yun" link={props.links?.yun} />
      <CharacterItem img={yangImg} name="Yang" link={props.links?.yang} />
      <CharacterItem img={kenImg} name="Ken" link={props.links?.ken} />
      <CharacterItem img={makotoImg} name="Makoto" link={props.links?.makoto} />
      <CharacterItem img={ibukiImg} name="Ibuki" link={props.links?.ibuki} />
      <CharacterItem img={seanImg} name="Sean" link={props.links?.sean} />
      <CharacterItem img={qImg} name="Q" link={props.links?.q} />
      <CharacterItem img={oroImg} name="Oro" link={props.links?.oro} />
      <CharacterItem img={hugoImg} name="Hugo" link={props.links?.hugo} />
      <CharacterItem img={elenaImg} name="Elena" link={props.links?.elena} />
      <CharacterItem img={dudleyImg} name="Dudley" link={props.links?.dudley} />
      <CharacterItem img={remyImg} name="Remy" link={props.links?.remy} />
      <CharacterItem img={necroImg} name="Necro" link={props.links?.necro} />
      <CharacterItem img={twelveImg} name="Twelve" link={props.links?.twelve} />
      <CharacterItem img={urienImg} name="Urien" link={props.links?.urien} />
      <CharacterItem img={goukiImg} name="Gouki" link={props.links?.gouki} />
    </div>
  );
};

export default Characters;
