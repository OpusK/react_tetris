import "./Tetris.css";

type Props = {
  rows: number,
  columns: number,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
};

const Tetris = ({ rows, columns, setGameOver }: Props): JSX.Element => {
  return (
    <div className="Tetris">
      {/* Board */}
      {/* GameStats */}
      {/* Previews */}
      {/* GameController */}
      <p>Tetris Game!!</p>
    </div>
  );
};

export default Tetris;
