import React from "react";
import Search from "./Search";

const Nav = ({ userName, setUserName }) => {
  return (
    <nav className="nav">
      <nav className="logo">
        <a href="/github-repolist">
          <img
            src="/github-repolist/images/icons8-github.svg"
            alt="GitHubLogo"
          />
        </a>
        <h1>GitHub Repository</h1>
      </nav>
      <ul>
        <li>
          <img src="/github-repolist/images/icons8-home.svg" alt="" />
          <a href="/github-repolist">Homepage</a>
        </li>
        <li>
          <img src="/github-repolist/images/icons8-about.svg" alt="" />
          <a href="#">About</a>
        </li>
        <li>
          <img src="/github-repolist/images/icons8-repository-50.png" alt="" />
          <a
            href="https://github.com/LambkinYeh/github-repolist"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
      <Search userName={userName} setUserName={setUserName} />
    </nav>
  );
};

export default Nav;
