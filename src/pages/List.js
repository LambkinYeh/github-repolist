import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RepoList from "../components/RepoList";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { v4 as uuidv4 } from "uuid";

const List = ({ listData, setListData, userName, setUserName }) => {
  let { username } = useParams();
  let [page, setPage] = useState(1);
  let [sort, setSort] = useState("full_name");
  let [hasmore, setHasmore] = useState(true);
  let [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  let listUrl = `https://api.github.com/users/${username}/repos?per_page=10&page=${page}&sort=${sort}`;

  const fetchListHeadler = async (url) => {
    try {
      const fetchList = await fetch(url);
      let parsedList = await fetchList.json();
      if (parsedList.message === "Not Found") {
        setLoading(false);
        console.log(parsedList.message);
        navigate(`/${username}/userNotFound`);
      } else {
        setLoading(false);
        setListData(parsedList);
      }
    } catch (e) {
      console.log("ERROR:" + e.message);
    }
  };

  const fetchMoreList = async (url) => {
    try {
      const fetchList = await fetch(url);
      let parsedList = await fetchList.json();
      const decide = () => {
        if (parsedList.length === 0) {
          setLoading(false);
          console.log("no more");
          console.log(parsedList);
          setHasmore(false);
        } else {
          setLoading(false);
          setListData(listData.concat(parsedList));
        }
      };
      setTimeout(() => {
        decide();
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  };

  const sortingFunction = () => {
    let selectBox = document.getElementById("selectBox");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue === "fullName") {
      setSort("full_name");
    } else if (selectedValue === "updated") {
      setSort("updated");
    } else if (selectedValue === "pushed") {
      setSort("pushed");
    } else if (selectedValue === "created") {
      setSort("created");
    }
  };

  const scrollHeadler = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      if (hasmore) {
        setPage((oldpage) => oldpage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeadler);
  }, []);

  useEffect(() => {
    setPage(1);
    setLoading(true);
    setHasmore(true);
    window.scrollTo(0, 0);
    fetchListHeadler(listUrl);
  }, [username]);

  useEffect(() => {
    if (page !== 1) {
      setLoading(true);
      fetchMoreList(listUrl);
    }
  }, [page]);

  useEffect(() => {
    setPage(1);
    setHasmore(true);
    window.scrollTo(0, 0);
    fetchListHeadler(listUrl);
  }, [sort]);

  return (
    <div>
      <Nav userName={userName} setUserName={setUserName} />
      <div className="list" style={{ minHeight: "100vh" }}>
        <div className="nav2">
          <h1 className="welcome">
            Welcome to <span className="user">{username}'s</span> Repository
            List.
          </h1>
          <div className="sort">
            <p>Sort By: </p>
            <select
              onChange={() => {
                sortingFunction();
              }}
              name="sort"
              id="selectBox"
              defaultValue="fullName"
            >
              <option value="fullName">Full Name</option>
              <option value="updated">Updated</option>
              <option value="pushed">Pushed</option>
              <option value="created">Created</option>
            </select>
          </div>
        </div>
        {loading ? (
          <h1 className="loading" style={{ color: "white" }}>
            Laoding...
          </h1>
        ) : (
          <h1></h1>
        )}
        <div className="cards">
          {listData &&
            listData.map((d) => {
              return <RepoList key={uuidv4()} d={d} username={username} />;
            })}
        </div>
        {hasmore ? (
          <h1 className="load">
            Try scroll down ⇣ to watch more repositories.
          </h1>
        ) : (
          <h1 className="noMore">There's no more repository to load.</h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default List;
