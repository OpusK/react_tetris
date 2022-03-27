import { useBoard } from "hooks/useBoard";
import { useGameStats } from "hooks/useGameStats";
import { usePlayer } from "hooks/usePlayer";
import { Tetromino } from "typings";
import Board from "./Board";
import GameStats from "./GameStats";
import Previews from "./Previews";
import "./Tetris.css";

type Props = {
  rows: number,
  columns: number,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
};

const Tetris = ({ rows, columns, setGameOver }: Props): JSX.Element => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows, columns, player, resetPlayer, addLinesCleared,
  });
  console.log(player.tetrominoes);

  return (
    <div className="Tetris">
      <Board {...board} />
      <GameStats {...gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      {/* GameController */}
    </div>
  );
};

export default Tetris;
