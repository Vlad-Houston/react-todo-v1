import React from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Button from "./components/UI/Button";

const App = props => {
  return (
    <div className="App">
      <Content
        onClick={props.onClick}
        appState={props.appState}
        deleteNote={props.deleteNote}
      />
    </div>
  );
};

export default App;
