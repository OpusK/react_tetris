import { BoardSize } from "typings";

const defaultCell = {
  occupied: false,
  className: "",
};

export const buildBoard = ({ rows, columns }: BoardSize) => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns }
  };
};
