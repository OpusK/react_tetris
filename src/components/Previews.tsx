import React from "react";
import { Tetromino } from "typings";
import Preview from "./Preview";

type Props = {
  tetrominoes: Array<Tetromino>;
}

const Previews = ({ tetrominoes }: Props) => {
  // everything except the last one
  const previewTetrominoes = tetrominoes.slice(1 - tetrominoes.length).reverse();

  return (
    <>
      {previewTetrominoes?.map((tetromino, index) => (
        <Preview tetromino={tetromino} index={index} key={index} />
      ))}
    </>
  );
};

export default React.memo(Previews);
