import theRiddlerChart from "./theRiddler.json";
import matsukenChart from "./matsuken.json";

type ChartsMap = {
  [key: string]: Array<Array<string>>;
};

export const charts: ChartsMap = {
  "The Riddler": theRiddlerChart,
  Matsuken: matsukenChart,
};
