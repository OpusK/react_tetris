import { BoardSize, TetrisBoard, Player, TetrominoState, Cell } from "typings";
import { transferToBoard } from "business/Tetrominoes";

const defaultCell: Cell = {
  occupied: false,
  className: "",
};

export const buildBoard = ({ rows, columns }: BoardSize) => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns }
  };
};

type Props = {
  board: TetrisBoard;
  player: Player;
  resetPlayer: () => void;
  addLinesCleared: (lines: number) => void;
}

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }: Props) => {
  const { tetromino, position } = player;

  // Copy and clear spaces used by pieces that
  // hadn't collided and occupied spaces permanently
  let rows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: player.collided,
    position,
    rows,
    shape: tetromino.shape
  });

  // Check for cleared lines
  const blankRow: Cell[] = rows[0].map((_) => ({ ...defaultCell }));
  let linesCleared = 0;
  let newRow: Cell[][];
  rows = rows.reduce((acc: Cell[][], row) => {
    if (row.every((column) => column.occupied)) {
      linesCleared++;
      acc.unshift(blankRow);
    } else {
      acc.push(row);
    }

    return acc;
  }, []);

  if (linesCleared > 0) {
    addLinesCleared(linesCleared);
  }

  // If we collided, reset the player!
  if (player.collided || player.isFastDropping) {
    resetPlayer();
  }

  // Return the next board
  return {
    rows,
    size: { ...board.size }
  };
};

export const hasCollision = ({ board, position, shape }: TetrominoState) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;

        if (
          board.rows[row] &&
          board.rows[row][column] &&
          board.rows[row][column].occupied
        ) {
          return true;
        }
      }
    }
  }

  return false;
};

export const isWithinBoard = ({ board, position, shape }: TetrominoState) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;
        const isValidPosition = board.rows[row] && board.rows[row][column];

        if (!isValidPosition) return false;
      }
    }
  }

  return true;
};
