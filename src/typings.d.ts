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
