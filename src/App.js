import React from "react";
import "./App.css";
import Content from "./components/Content/Content";

const App = props => {
  return (
    <div className="App">
      <Content onClick={props.onClick} appState={props.appState} />
    </div>
  );
};

export default App;
