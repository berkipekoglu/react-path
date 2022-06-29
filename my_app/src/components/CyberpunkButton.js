import React from "react";
import "./CyberpunkButton.css"

const CyberpunkButton = (props) => {
  return (
    <button className="cyber-button">
      {props.name}<span aria-hidden>_</span>
      <span aria-hidden className="cyber-button__glitch">
        {props.name}_
      </span>
      <span aria-hidden className="cyber-button__tag">
        {props.code}
      </span>
    </button>
  );
};

export default CyberpunkButton;
