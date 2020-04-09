import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { anoBissexto } from "./exercicios/ex1";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => anoBissexto(400)}>Oi</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
