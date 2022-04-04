import React, { useState } from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Homepage = ({ userName, setUserName }) => {
  return (
    <div>
      <div className="homepage" style={{ minHeight: "100vh" }}>
        <div className="filter">
          <nav className="nav">
            <nav className="logo">
              <a href="/">
                <img src="/images/icons8-github.svg" alt="GitHubLogo" />
              </a>
              <h1>GitHub Repository</h1>
            </nav>
            <ul>
              <li>
                <img src="/images/icons8-home.svg" alt="" />
                <a href="/">Homepage</a>
              </li>
              <li>
                <img src="/images/icons8-about.svg" alt="" />
                <a href="#">About</a>
              </li>
              <li>
                <img src="/images/icons8-repository-50.png" alt="" />
                <a href="#">GitHub</a>
              </li>
            </ul>
          </nav>
          <Search userName={userName} setUserName={setUserName} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
