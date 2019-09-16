import React from "react";
import style from "./Content.module.css";
import Button from "../UI/Button";
import Note from "../Note/Note";

const Content = props => {
  return (
    <div className={style.Content}>
      <textarea cols="30" rows="10"></textarea>
      <Button onClick={props.onClick}>Добавить</Button>
      <Note />
    </div>
  );
};

export default Content;
