import { Link } from "react-router-dom";
import style from "./sideBar.module.scss";
const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <Link to="/feed">News</Link>
      <Link to="/mail">Messenger</Link>
      <Link to="/friends">Friends</Link>
    </div>
  );
};
export default SideBar;
