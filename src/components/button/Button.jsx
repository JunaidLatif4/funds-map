import React from "react";
import "./Button.css";

const Button = ({ text }) => {
  return <button className="btn__container">{text}</button>;
};

export default Button;
