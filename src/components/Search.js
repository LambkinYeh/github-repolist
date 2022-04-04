import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Search = ({ userName, setUserName }) => {
  let navigate = useNavigate();

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      navigate(`/github-repolist/user/${userName}/repos`);
    }
  };

  const inputHeadler = (input) => {
    setUserName(input.target.value);
  };

  return (
    <div className="search">
      <input
        onChange={inputHeadler}
        onKeyPress={(e) => {
          handleKeypress(e);
        }}
        type="text"
      />

      <Link to={`/github-repolist/user/${userName}/repos`}>
        <img
          src="/github-repolist/images/icons8-magnifier-66.png"
          alt="放大鏡"
        />
      </Link>
    </div>
  );
};

export default Search;
