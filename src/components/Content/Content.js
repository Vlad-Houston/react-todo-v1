import React from "react";
import style from "./Content.module.css";
import Button from "../UI/Button";
import Note from "../Note/Note";

const Content = props => {
  let newNote = React.createRef();

  let addNote = () => {
    props.onClick(newNote.current.value);
    newNote.current.value = "";
  };

  return (
    <div className={style.Content}>
      <textarea
        cols="auto"
        rows="5"
        ref={newNote}
        placeholder="Запишите что-то"
      ></textarea>
      <Button onClick={addNote} className={style.addButton}>
        Добавить
      </Button>
      <Note appState={props.appState} deleteNote={props.deleteNote} />
    </div>
  );
};

export default Content;
