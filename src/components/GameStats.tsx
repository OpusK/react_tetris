import React from "react";
import { TetrisStats } from "typings";
import "./GameStats.css";

const GameStats = ( { level, points, linesCompleted, linesPerLevel }: TetrisStats ) => {
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="GameStats GameStats__right">
      <li>Level</li>
      <li className="value">{level}</li>
      <li>Lines to level</li>
      <li className="value">{linesToLevel}</li>
      <li>Points</li>
      <li className="value">{points}</li>
    </ul>
  );
};

export default React.memo(GameStats);
