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

export const selectionScreenData: Map<
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
