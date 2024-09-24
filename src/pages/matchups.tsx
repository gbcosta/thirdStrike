import chunAvatar from "../assets/ch-avatar.jpeg";
import yunAvatar from "../assets/yu-avatar.jpeg";
import kenAvatar from "../assets/ke-avatar.jpeg";
import makotoAvatar from "../assets/ma-avatar.jpeg";
import dudleyAvatar from "../assets/du-avatar.jpeg";
import yangAvatar from "../assets/ya-avatar.jpeg";
import goukiAvatar from "../assets/go-avatar.jpeg";
import urienAvatar from "../assets/ur-avatar.jpeg";
import oroAvatar from "../assets/or-avatar.jpeg";
import ryuAvatar from "../assets/ry-avatar.jpeg";
import ibukiAvatar from "../assets/ib-avatar.jpeg";
import elenaAvatar from "../assets/el-avatar.jpeg";
import necroAvatar from "../assets/ne-avatar.jpeg";
import hugoAvatar from "../assets/hu-avatar.jpeg";
import alexAvatar from "../assets/al-avatar.jpeg";
import qAvatar from "../assets/q-avatar.jpeg";
import remyAvatar from "../assets/re-avatar.jpeg";
import twelveAvatar from "../assets/tw-avatar.jpeg";
import seanAvatar from "../assets/sean-avatar.jpeg";

const CharacterAvatarHead = ({ src }: { src?: string }) => {
  return (
    <th className="max-w-12 min-w-12">
      <img src={src}></img>
    </th>
  );
};

const CharacterAvatarCell = ({ src }: { src?: string }) => {
  return (
    <td className="max-w-12 min-w-12">
      <img src={src}></img>
    </td>
  );
};

const MatchCell = ({ children }: { children: string }) => {
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
    <td
      style={{ background: getColor(children) }}
      className="min-w-12 max-w-12 text-white text-center font-bold"
    >
      {children}
    </td>
  );
};

export const Matchups = () => {
  return (
    <div className="flex justify-center mt-4 mb-4">
      <table>
        <thead>
          <tr>
            <CharacterAvatarHead />
            <CharacterAvatarHead src={chunAvatar} />
            <CharacterAvatarHead src={yunAvatar} />
            <CharacterAvatarHead src={kenAvatar} />
            <CharacterAvatarHead src={makotoAvatar} />
            <CharacterAvatarHead src={dudleyAvatar} />
            <CharacterAvatarHead src={yangAvatar} />
            <CharacterAvatarHead src={urienAvatar} />
            <CharacterAvatarHead src={goukiAvatar} />
            <CharacterAvatarHead src={oroAvatar} />
            <CharacterAvatarHead src={ryuAvatar} />
            <CharacterAvatarHead src={ibukiAvatar} />
            <CharacterAvatarHead src={elenaAvatar} />
            <CharacterAvatarHead src={necroAvatar} />
            <CharacterAvatarHead src={hugoAvatar} />
            <CharacterAvatarHead src={alexAvatar} />
            <CharacterAvatarHead src={qAvatar} />
            <CharacterAvatarHead src={remyAvatar} />
            <CharacterAvatarHead src={twelveAvatar} />
            <CharacterAvatarHead src={seanAvatar} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <CharacterAvatarCell src={chunAvatar} />
            <MatchCell>-</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>7</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>7</MatchCell>
            <MatchCell>7</MatchCell>
            <MatchCell>7</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>8</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={yunAvatar} />
            <MatchCell>4.5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>7</MatchCell>
            <MatchCell>6.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={kenAvatar} />
            <MatchCell>4</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>7</MatchCell>
            <MatchCell>7</MatchCell>
            <MatchCell>6.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={makotoAvatar} />
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>8</MatchCell>
            <MatchCell>7.5</MatchCell>
            <MatchCell>7</MatchCell>
            <MatchCell>6.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={dudleyAvatar} />
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={yangAvatar} />
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={goukiAvatar} />
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={urienAvatar} />
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>7</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={oroAvatar} />
            <MatchCell>3</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={ryuAvatar} />
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>7</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={ibukiAvatar} />
            <MatchCell>3.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={elenaAvatar} />
            <MatchCell>3.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>7.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
            <MatchCell>6.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={necroAvatar} />
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={hugoAvatar} />
            <MatchCell>3 </MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>2.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
          </tr>

          <tr>
            <CharacterAvatarCell src={alexAvatar} />
            <MatchCell>3 </MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>6</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={qAvatar} />
            <MatchCell>3</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>2</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>5.5</MatchCell>
            <MatchCell>6</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={remyAvatar} />
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3</MatchCell>
            <MatchCell>2.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>6</MatchCell>
            <MatchCell>5.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={twelveAvatar} />
            <MatchCell>3.5</MatchCell>
            <MatchCell>3</MatchCell>
            <MatchCell>3</MatchCell>
            <MatchCell>3</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>—</MatchCell>
            <MatchCell>5.5</MatchCell>
          </tr>
          <tr>
            <CharacterAvatarCell src={seanAvatar} />
            <MatchCell>2</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>3.5</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>4.5</MatchCell>
            <MatchCell>—</MatchCell>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
