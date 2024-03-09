import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Root from "./components/root/root";
import Home from "./components/home/home";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import FoodRecipe from "./components/foodrecipe/foodrecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Food-recipe />,
    // children: [
    //     {
    //       path: "Food Recipe",
    //       element: < FoodRecipe />,
    //     },
    // ]
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <></>;
}

export default App;
