import { Route, Routes } from "react-router-dom";
import SideBar from "../sideBar/sideBar";
import style from "./signin.module.scss";

const SignIn = () => {
  return (
    <div className={style.contentWrap}>
      <div className={style.content}>
        <p>Stay in touch on the go with VK clone</p>
        <input
          className={style.input}
          type="text"
          placeholder="phone or email"
        />
        <br />
        <input className={style.input} type="text" placeholder="Password" />
        <br />
        <button>Sign in</button>
        <p>Forgot password</p>
      </div>
    </div>
  );
};

export default SignIn;
