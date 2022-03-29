import { useBoard } from "hooks/useBoard";
import { useGameStats } from "hooks/useGameStats";
import { usePlayer } from "hooks/usePlayer";
import { Tetromino } from "typings";
import Board from "./Board";
import GameController from "./GameController";
import GameStats from "./GameStats";
import Previews from "./Previews";
import "./Tetris.css";

type Props = {
  rows: number,
  columns: number,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
};

const Tetris = ({ rows, columns, setGameOver }: Props) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows, columns, player, resetPlayer, addLinesCleared,
  });

  return (
    <div className="Tetris">
      <Board {...board} />
      <GameStats {...gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </div>
  );
};

export default Tetris;
