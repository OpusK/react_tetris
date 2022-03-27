import { useState, useEffect } from "react";
import { buildBoard, nextBoard } from "business/Board";
import { BoardSize, Player, TetrisBoard } from "typings";

type Props = {
  rows: number,
  columns: number,
  player: Player,
  resetPlayer: () => void,
  addLinesCleared: (lines: number) => void,
}

export const useBoard = ({rows, columns, player, resetPlayer, addLinesCleared}: Props) => {
  const [board, setBoard] = useState<TetrisBoard>(buildBoard({ rows, columns }));

  useEffect(() => {
    setBoard((previousBoard) =>
      nextBoard({
        board: previousBoard,
        player,
        resetPlayer,
        addLinesCleared
      })
    );
  }, [player, resetPlayer, addLinesCleared]);

  return [board];
};
