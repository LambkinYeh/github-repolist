import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import List from "./pages/List";
import style from "./styles/style.css";
import Repo from "./pages/Repo";
import NotFound from "./pages/NotFound";
import UserNotFound from "./pages/UserNotFound";

function App() {
  let [userName, setUserName] = useState("");
  let [listData, setListData] = useState(null);

  return (
    <div className="App">
      {/* <Nav userName={userName} setUserName={setUserName} /> */}
      <Routes>
        <Route
          path={`/`}
          element={<Homepage userName={userName} setUserName={setUserName} />}
        />
        <Route
          path={`/user/:username/repos`}
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
          path={`/user/:username/repos/:repo`}
          element={<Repo userName={userName} setUserName={setUserName} />}
        />
        <Route path={`/:username/userNotFound`} element={<UserNotFound />} />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
