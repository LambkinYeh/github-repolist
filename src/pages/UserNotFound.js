import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UserNotFound = () => {
  let { username } = useParams();
  let navigate = useNavigate();
  return (
    <div className="notfound" style={{ minHeight: "100vh" }}>
      <div className="filter">
        <h1 className="row1">Error!! Can Not Find " {username} ".</h1>
        <h1 className="row2">" {username} " is not a user. </h1>
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

export default UserNotFound;
