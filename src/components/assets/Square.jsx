import React from "react";

import "../../styles/main.sass"

const Square = (props) => {
  return (
    <div
      className={`square ${
        props.type == "light" ? "light__square" : "dark__square"
      }`}
    >
      {props.piece}
    </div>
  );
};

export default Square;
