import React from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import Root from "./components/root/root.jsx";
import { Route } from "react-router-dom";
import Home from "./components/home/home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <userProvider>
    <App />
    <Home></Home>
    </userProvider>
  </React.StrictMode>
);
