import React from "react";
import style from "./Button.module.css";

const Button = props => {
  return (
    <div className={style.Button}>
      <button onClick={props.onClick} className={props.className}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
