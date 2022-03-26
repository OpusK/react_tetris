import { useState, useEffect } from "react";
import { buildBoard } from "business/Board";
import { BoardSize } from "typings";

export const useBoard = ({rows, columns}: BoardSize) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));

  return [board];
};
