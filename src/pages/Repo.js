import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Repo = ({ userName, setUserName }) => {
  let { username } = useParams();
  let { repo } = useParams();
  let [repoData, setRepoData] = useState(null);
  let navigate = useNavigate();

  const fetchRepoHeadler = async () => {
    let fetchRepo = await fetch(
      `https://api.github.com/repos/${username}/${repo}`
    );
    let parsedRepo = await fetchRepo.json();
    if (parsedRepo.message === "Not Found") {
      console.log(parsedRepo.message);
      navigate(`/${repo}/RepoNotFound`);
    } else {
      setRepoData(parsedRepo);
    }
  };

  useEffect(() => {
    fetchRepoHeadler();
  }, []);

  if (repoData != null) {
    return (
      <div>
        <Nav userName={userName} setUserName={setUserName} />
        <div className="repoData" style={{ minHeight: "90vh" }}>
          <div className="cards">
            <div className="card1">
              <p>Language:</p>
              {repoData.language ? (
                <p className="language">{repoData.language}</p>
              ) : (
                <p>None</p>
              )}
            </div>

            <div className="card2">
              <h1>{repo}</h1>
              <p>Description:</p>
              {repoData.description ? (
                <p className="description">{repoData.description}</p>
              ) : (
                <p>None</p>
              )}
            </div>

            <div className="card3">
              <p>Stargazers Count:</p>
              <p className="stargazers">{repoData.stargazers_count}★</p>
            </div>
          </div>
          <div className="bar">
            <div className="back">
              <p>⮰</p>
              <Link to={`/user/${userName}/repos`}>Back to list page.</Link>
            </div>
            <div className="visit">
              <a className="visit" href={repoData.svn_url} target="_blank">
                Visit the GitHub website.
              </a>
              <img src="/images/icons8-click-66.png" alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Repo;
