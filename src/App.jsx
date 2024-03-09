import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Root from "./components/root/root";
import Home from "./components/home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Food from "./components/food/food";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "food", element: <Food /> }],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
