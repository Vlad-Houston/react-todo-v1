import React from "react";
import style from "./Note.module.css";
import Button from "../UI/Button";

const Note = props => {
  return (
    <ul className={style.Note}>
      {props.appState.notes.map((value, index) => {
        return (
          <li key={index}>
            <p>{value.note}</p>
            <Button onClick={props.delete}>Удалить</Button>
          </li>
        );
      })}
    </ul>
  );
};

export default Note;
