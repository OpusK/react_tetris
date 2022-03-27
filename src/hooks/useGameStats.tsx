import { useState, useCallback } from "react";
import { TetrisStats } from "typings";

const buildGameStats = () => ({
  level: 1,
  points: 0,
  linesCompleted: 0,
  linesPerLevel: 10,
});

export const useGameStats = () => {
  const [gameStats, setGameStats] = useState(buildGameStats());

  const addLinesCleared = useCallback((lines) => {
    setGameStats((previous): TetrisStats => {
      const points = previous.points + lines * 100;
      const { linesPerLevel } = previous;
      const newLinesCompleted = previous.linesCompleted + lines;
      const level =
        newLinesCompleted >= linesPerLevel
          ? previous.level + 1
          : previous.level;
      const linesCompleted = newLinesCompleted % linesPerLevel;

      return {
        level,
        points,
        linesCompleted,
        linesPerLevel,
      };
    });
  }, []);

  return [gameStats, addLinesCleared] as const;
};
