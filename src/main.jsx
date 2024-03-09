import React from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { Route } from "react-router-dom";
import Home from "./components/home/home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Home></Home>
  </React.StrictMode>
);
