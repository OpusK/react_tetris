import { useState, useCallback } from "react";
import { Tetromino, Player } from "typings";
import { randomTetromino } from "business/Tetrominoes";

const buildPlayer = (previous?: Player): Player => {
  let tetrominoes: Array<Tetromino>;

  if (previous) {
    tetrominoes = [...previous.tetrominoes];
    tetrominoes.unshift(randomTetromino());
  } else {
    tetrominoes = Array(5).fill(null).map((_) => randomTetromino());
  }

  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop() as Tetromino
  } as Player;
};

export const usePlayer = () => {
  const [player, setPlayer] = useState(buildPlayer());

  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(prev));
  }, []);

  return [player, setPlayer, resetPlayer] as const;
};
