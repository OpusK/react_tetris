import { useBoard } from "hooks/useBoard";
import { useGameStats } from "hooks/useGameStats";
import Board from "./Board";
import GameStats from "./GameStats";
import "./Tetris.css";

type Props = {
  rows: number,
  columns: number,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
};

const Tetris = ({ rows, columns, setGameOver }: Props): JSX.Element => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({rows, columns});

  return (
    <div className="Tetris">
      <Board {...board} />
      <GameStats {...gameStats} />
      {/* Previews */}
      {/* GameController */}
    </div>
  );
};

export default Tetris;
