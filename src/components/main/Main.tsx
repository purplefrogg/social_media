import { Outlet, Route, Routes } from "react-router-dom";
import Feed from "../feed/Feed";
import SideBar from "../sideBar/sideBar";
import style from "./Main.module.scss";
const Main = () => {
  return (
    <div className={style.main}>
      <SideBar />
      <div className={style.content}>
        <Outlet />
      </div>
    </div>
  );
};
export default Main;
