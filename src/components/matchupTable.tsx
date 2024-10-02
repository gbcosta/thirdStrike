import chunAvatar from "../assets/chun-3s-avatar.png";
import yunAvatar from "../assets/yun-3s-avatar.png";
import kenAvatar from "../assets/ken-3s-avatar.png";
import makotoAvatar from "../assets/makoto-3s-avatar.png";
import dudleyAvatar from "../assets/dudley-3s-avatar.png";
import yangAvatar from "../assets/yang-3s-avatar.png";
import goukiAvatar from "../assets/akuma-3s-avatar.png";
import urienAvatar from "../assets/urien-3s-avatar.png";
import oroAvatar from "../assets/oro-3s-avatar.png";
import ryuAvatar from "../assets/ryu-3s-avatar.png";
import ibukiAvatar from "../assets/ibuki-3s-avatar.png";
import elenaAvatar from "../assets/elena-3s-avatar.png";
import necroAvatar from "../assets/necro-3s-avatar.png";
import hugoAvatar from "../assets/hugo-3s-avatar.png";
import alexAvatar from "../assets/alex-3s-avatar.png";
import qAvatar from "../assets/q-3s-avatar.png";
import remyAvatar from "../assets/remy-3s-avatar.png";
import twelveAvatar from "../assets/twelve-3s-avatar.png";
import seanAvatar from "../assets/sean-3s-avatar.png";

const charactersImages = [
  chunAvatar,
  yunAvatar,
  kenAvatar,
  makotoAvatar,
  dudleyAvatar,
  yangAvatar,
  urienAvatar,
  goukiAvatar,
  oroAvatar,
  ryuAvatar,
  ibukiAvatar,
  elenaAvatar,
  necroAvatar,
  hugoAvatar,
  alexAvatar,
  qAvatar,
  remyAvatar,
  twelveAvatar,
  seanAvatar,
];

const CharacterAvatarHead = ({ src }: { src?: string }) => {
  return (
    <th className="p-1 cursor-pointer">
      <img className="object-cover min-w-12 max-w-12 h-12" src={src}></img>
    </th>
  );
};

const CharacterAvatarCell = ({ src }: { src?: string }) => {
  return (
    <td className="p-1 cursor-pointer">
      <img className="object-cover min-w-12 max-w-12 h-12" src={src}></img>
    </td>
  );
};

const MatchupCell = ({ children }: { children: string }) => {
  const getColor = (value: string) => {
    const valueNumber = Number(value);
    if (isNaN(valueNumber)) return "#cccccc";
    if (valueNumber <= 2.5) return "#990000";
    if (valueNumber <= 3.5) return "#cc0000";
    if (valueNumber <= 4.5) return "#e06666";
    if (valueNumber == 5) return "#f1c232";
    if (valueNumber <= 6) return "#93c47d";
    if (valueNumber <= 7) return "#6aa84f";
    if (valueNumber > 7) return "#38761d";
  };

  return (
    <td className="text-white text-center font-bold p-1 cursor-pointer hover:text-black">
      <div
        className="object-cover min-w-12 max-w-12 h-12 flex justify-center items-center font-bold"
        style={{ backgroundColor: getColor(children) }}
      >
        {children}
      </div>
    </td>
  );
};

const MatchTableRow = ({
  data,
  imgSrc,
}: {
  data: Array<string>;
  imgSrc: string;
}) => {
  return (
    <tr>
      <CharacterAvatarCell src={imgSrc} />
      {data.map((number: string, key) => {
        return <MatchupCell key={key}>{number}</MatchupCell>;
      })}
      <CharacterAvatarCell src={imgSrc} />
    </tr>
  );
};

export const MatchupTableHead = () => {
  return (
    <thead>
      <tr>
        <th className="max-w-12 min-w-12" />
        {charactersImages.map((image, key) => {
          return <CharacterAvatarHead key={key} src={image} />;
        })}
      </tr>
    </thead>
  );
};

export const MatchupTableBody = ({
  chart,
}: {
  chart: Array<Array<string>>;
}) => {
  return (
    <tbody>
      {charactersImages.map((image, key) => {
        return <MatchTableRow imgSrc={image} key={key} data={chart[key]} />;
      })}
      <tr>
        <th className="max-w-12 min-w-12" />
        {charactersImages.map((image, key) => {
          return <CharacterAvatarCell key={key} src={image} />;
        })}
      </tr>
    </tbody>
  );
};
