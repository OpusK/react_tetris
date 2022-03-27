export interface Cell {
  occupied: boolean,
  className: string,
}

export interface BoardSize {
  rows: number,
  columns: number,
}

export interface TetrisBoard {
  rows: Cell[][],
  size: BoardSize,
}

export interface TetrisStats {
  level: number;
  points: number;
  linesCompleted: number;
  linesPerLevel: number;
}
export interface Tetromino {
  shape: number[][],
  className: string,
}

export interface Player {
  collided: boolean,
  isFastDropping: boolean,
  position: { row: number, column: number },
  tetrominoes: Array<Tetromino>,
  tetromino: Tetromino,
}
