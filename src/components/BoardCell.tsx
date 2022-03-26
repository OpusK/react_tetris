import "./BoardCell.css";
import { Cell } from 'typings';

const BoardCell = (cell: Cell) => (
  <div className={`BoardCell ${cell.className}`}>
    <div className="Sparkle"></div>
  </div>
);

export default BoardCell;
