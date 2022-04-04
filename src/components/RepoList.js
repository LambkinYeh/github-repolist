import React from "react";
import { Link } from "react-router-dom";

const RepoList = ({ d, username }) => {
  if (d != null) {
    return (
      <div className="repo">
        <div className="filter"></div>
        <p className="name">『{d.name}』</p>
        <div className="row2">
          <p className="stargazers">
            Stargazers: <span>{d.stargazers_count} ★</span>
          </p>
          <p className="click">
            Click{" "}
            <Link to={`/user/${username}/repos/${d.name}`} target="_self">
              Me
            </Link>{" "}
            to watch more details
          </p>
        </div>
        <div className="row3">
          <p className="created">Created Time:{d.created_at}</p>
          <p className="pushed">Pushed Time:{d.pushed_at}</p>
          <p className="updated">Updated Time:{d.updated_at}</p>
        </div>
      </div>
    );
  }
};

export default RepoList;
