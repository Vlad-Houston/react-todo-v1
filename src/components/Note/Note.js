import React from "react";
import style from "./Note.module.css";
import Button from "../UI/Button";

const Note = props => {
  return (
    <div className={style.Note}>
      <h1>{props.appState}Нотатка</h1>
      <Button onClick={props.delete}>Удалить</Button>
    </div>
  );
};

export default Note;
