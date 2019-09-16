import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addNewNote } from "./redux/state";

export let rerenderEntireTree = state => {
  ReactDOM.render(
    <App onClick={addNewNote} appState={state} />,
    document.getElementById("root")
  );
};
