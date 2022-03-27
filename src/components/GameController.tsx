import { TetrisBoard, TetrisStats, Player } from "typings";

type Props = {
  board: TetrisBoard;
  gameStats: TetrisStats;
  player: Player;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayer: React.Dispatch<React.SetStateAction<Player>>;
}

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}: Props) => {
  const onKeyUp = ({ code }: React.KeyboardEvent<HTMLInputElement>) => {
    if (code === "KeyQ") {
      setGameOver(true);
    }
  };

  const onKeyDown = ({ code }: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(`onKeyDown ${code}`);
  };

  return (
    <input
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
    />
  );
};

export default GameController;
