import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import List from "./pages/List";
import style from "./styles/style.css";
import Repo from "./pages/Repo";
import NotFound from "./pages/NotFound";
import UserNotFound from "./pages/UserNotFound";
import About from "./pages/About";

function App() {
  let [userName, setUserName] = useState("");
  let [listData, setListData] = useState(null);

  return (
    <div className="App">
      {/* <Nav userName={userName} setUserName={setUserName} /> */}
      <Routes>
        <Route
          path={`/github-repolist`}
          element={<Homepage userName={userName} setUserName={setUserName} />}
        />
        <Route
          path={`/github-repolist/user/:username/repos`}
          element={
            <List
              listData={listData}
              setListData={setListData}
              userName={userName}
              setUserName={setUserName}
            />
          }
        />
        <Route
          path={`/github-repolist/user/:username/repos/:repo`}
          element={<Repo userName={userName} setUserName={setUserName} />}
        />
        <Route path={`/github-repolist/about`} element={<About />} />
        <Route
          path={`/github-repolist/:username/userNotFound`}
          element={<UserNotFound />}
        />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
