import Menu from './Menu';

type Props = {
  rows: number,
  columns: number,
};

const Game = ({ rows, columns }: Props): JSX.Element => {
  const start = () => { alert('Game start!!'); }

  return (
    <div className="Game">
      <Menu onClick={start} />
      <p>rows {rows}, columns {columns}</p>
    </div>
  );
}

export default Game;
