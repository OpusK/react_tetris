import "./Board.css";

import BoardCell from "./BoardCell";
import { TetrisBoard, Cell } from 'typings';

const Board = (board: TetrisBoard) => {
  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
  };

  return (
    <div className="Board" style={boardStyles}>
      {board.rows.map((row: Cell[], y) =>
        row.map((cell: Cell, x: number) => (
          <BoardCell key={x * board.size.columns + x} {...cell} />
        ))
      )}
    </div>
  );
};

export default Board;
