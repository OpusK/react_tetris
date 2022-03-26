import { useBoard } from "hooks/useBoard";
import { BoardSize } from "typings";
import Board from "./Board";
import "./Tetris.css";

type Props = {
  rows: number,
  columns: number,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
};

const Tetris = ({ rows, columns, setGameOver }: Props): JSX.Element => {
  const [board, setBoard] = useBoard({rows, columns});

  return (
    <div className="Tetris">
      <Board {...board} />
      {/* GameStats */}
      {/* Previews */}
      {/* GameController */}
      <p>Tetris Game!!</p>
    </div>
  );
};

export default Tetris;
