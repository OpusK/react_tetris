import "./GameController.css";
import { TetrisBoard, TetrisStats, Player } from "typings";
import { Action, actionForKey, actionIsDrop } from "business/Input";
import { PlayerController } from "business/PlayerController";
import { useDropTime } from "hooks/useDropTime";
import { useInterval } from "hooks/useInterval";

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
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ gameStats });

  useInterval({ callback: () => { handleInput(Action.SlowDrop); }, delay: dropTime });

  const onKeyUp = ({ code }: React.KeyboardEvent<HTMLInputElement>) => {
    if (actionForKey(code) === Action.Quit) {
      setGameOver(true);
    }
  };

  const onKeyDown = ({ code }: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(`onKeyDown ${code}`);
    handleInput(actionForKey(code));
  };

  const handleInput = (action: string) => {
    PlayerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver
    });
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
