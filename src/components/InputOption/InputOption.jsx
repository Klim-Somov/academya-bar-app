import React from "react";
import "./InputOption.scss";

function InputOption({ color, Icon, text }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{text}</h4>
    </div>
  );
}

export default InputOption;
