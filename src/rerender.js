import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addNewNote, deleteNote } from "./redux/state";

export let rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      onClick={addNewNote}
      appState={state}
      deleteNote={deleteNote}
      className="App"
    />,
    document.getElementById("root")
  );
};
