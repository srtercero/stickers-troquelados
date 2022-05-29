//Traigo la librería de ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles.css";

//Agarrar una app que ya exista de REACT
/*function App() {
  return "Hola Mundo";
}*/

// const App = () => "Hola mundo esto es Ivan";

//Mostrar la APP en el DOM
//Crear un punto inicial (root) en donde la App se va a montar (dibujar)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
