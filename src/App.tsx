import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, parsePath, Route, Routes } from "react-router-dom";
import "./App.scss";
import Feed from "./components/feed/Feed";
import Friends from "./components/friends/Friends";
import Main from "./components/main/Main";
import Messenger from "./components/messendger/Messendger";
import SideBar from "./components/sideBar/sideBar";
import SignIn from "./components/signin_page/signin";

function App() {
  const [error, setError] = useState("asdas");
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState("");

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  // useEffect(() => {
  //   fetch("http://localhost:3001/task", {
  //     method: "POST",
  //     body: JSON.stringify({ id: 3, task: "asdasd" }),
  //   })
  //     .then((res) => {
  //       console.log(res);

  //       return res.json();
  //     })
  //     .then(
  //       (result) => {
  //         console.log(result);
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
  //       // чтобы не перехватывать исключения из ошибок в самих компонентах.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError("err");
  //       }
  //     );
  // }, []);
  // console.log(items);
  // const getData = () => {
  //   setIsLoaded(!isLoaded);
  // };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="feed" element={<Feed />}></Route>
            <Route path="mail" element={<Messenger />}></Route>
            <Route path="friends" element={<Friends />}></Route>
          </Route>
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
