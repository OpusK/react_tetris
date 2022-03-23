import Menu from './Menu';
import { useGameOver } from "hooks/useGameOver";

type Props = {
  rows: number,
  columns: number,
};

const Game = ({ rows, columns }: Props): JSX.Element => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
    alert("Game Start!");
  };

  return (
    <div className="Game">
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        // <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
        <p>rows {rows}, columns {columns}</p>
      )}
    </div>
  );
}

export default Game;
