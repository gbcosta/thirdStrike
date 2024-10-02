import { MatchupTableBody, MatchupTableHead } from "../components/matchupTable";
import { ChangeEvent, useState } from "react";
import { charts } from "../utils/matchupData/charts";

export const Matchups = () => {
  const [matchupSelectValue, setMatchupSelectValue] =
    useState<string>("The Riddler");

  return (
    <div className="flex flex-col items-center gap-4 bg-gray-800 py-24">
      <h1 className="text-4xl font-bold text-center text-white">
        MATCHUP CHARTS
      </h1>
      <select
        id="matchups"
        name="cars"
        className="w-1/4 bg-green-500 outline-none p-4 text-xl mt-8 font-bold"
        value={matchupSelectValue}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setMatchupSelectValue(e.target.value);
        }}
      >
        <option value="The Riddler" className="font-bold">
          The Riddler
        </option>
        <option value="Matsuken" className="font-bold">
          Matsuken (Replace Holder)
        </option>
      </select>
      <div className="flex justify-center mt-4 mb-4">
        <table className="p-2">
          <MatchupTableHead />
          <MatchupTableBody chart={charts[matchupSelectValue]} />
        </table>
      </div>
    </div>
  );
};
