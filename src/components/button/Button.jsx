import React from "react";
import "./Button.css";

const Button = ({ text, click }) => {
  return (
    <button className="btn__container" onClick={click}>
      {text}
    </button>
  );
};

export default Button;
