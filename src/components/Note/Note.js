import React from "react";
import style from "./Note.module.css";
import Button from "../UI/Button";

const Note = props => {
  // deleteNote={props.deleteNote}
  let delNote = () => {
    props.deleteNote(2);
    console.log("delete");
  };

  return (
    <ul className={style.Note}>
      {props.appState.notes.map((value, index) => {
        return (
          <li key={index}>
            <p>{value.id + ". " + value.note}</p>
            <div className={style.buttonConteiner}>
              <Button className={style.editButton}>Редактировать</Button>
              <Button onClick={delNote} className={style.deleteButton}>
                Удалить
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Note;
