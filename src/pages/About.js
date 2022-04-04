import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  return (
    <div className="about" style={{ minHeight: "100vh" }}>
      <div className="intro">
        <h1 className="line1">Introduction .</h1>
        <p className="line2">
          1.Type in the GitHub user's name you want to search. And click Search.
        </p>
        <p className="line3">
          (You can sort the list by fullname/created/pushed/updated)
        </p>
        <p className="line4">2.Scroll down to load more repositories.</p>
        <p className="line5">
          3.Find a repository, and click the link to watch more.
        </p>
        <p className="line6">
          4.Click the link to visit the repo's GitHub website.
        </p>
        <button
          onClick={() => {
            navigate("/github-repolist");
          }}
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default About;
