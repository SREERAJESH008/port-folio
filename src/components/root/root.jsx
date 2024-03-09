import { Outlet } from "react-router-dom";
import Food from "../food/food";
import Home from "../home/home";

const Root = () => {
  return (
    <>
      <Home></Home>
      {/* <h1>hello mama</h1> */}
      <Outlet></Outlet>
    </>
  );
};

export default Root;
