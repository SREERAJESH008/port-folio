import { Outlet } from "react-router-dom";
import Food from "../food/food";
import Home from "../home/home";

const Root = () => {
  return (
    <>
      <Home></Home>
      {/* <Outlet></Outlet> */}
    </>
  );
};

export default Root;
