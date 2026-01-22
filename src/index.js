import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Arquivo CSS global
import App from "./App"; // Componente principal do App
import { BrowserRouter } from "react-router-dom"; // Para navegação com React Router

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
