import { useState, useCallback, useEffect } from "react";
import { TetrisStats } from "typings";

const defaultDropTime = 1000;
const minimumDropTime = 100;
const speedIncrement = 50;

type Props = {
  gameStats: TetrisStats;
}

export const useDropTime = ({ gameStats }: Props) => {
  const [dropTime, setDropTime] = useState(defaultDropTime);
  const [previousDropTime, setPreviousDropTime] = useState(0);

  const resumeDropTime = useCallback(() => {
    if (!previousDropTime) {
      return;
    }
    setDropTime(previousDropTime);
    setPreviousDropTime(0);
  }, [previousDropTime]);

  const pauseDropTime = useCallback(() => {
    if (dropTime) {
      setPreviousDropTime(dropTime);
    }
    setDropTime(0);
  }, [dropTime, setPreviousDropTime]);

  useEffect(() => {
    const speed = speedIncrement * (gameStats.level - 1);
    const newDropTime = Math.max(defaultDropTime - speed, minimumDropTime);

    setDropTime(newDropTime);
  }, [gameStats.level, setDropTime]);

  return [dropTime, pauseDropTime, resumeDropTime] as const;
};
