import "./Menu.css"

type Props = {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Menu = ({ onClick }: Props): JSX.Element => {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Play Ketris
      </button>
    </div>
  )
}

export default Menu
