import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  let navigate = useNavigate();
  return (
    <div className="notfound" style={{ minHeight: "100vh" }}>
      <div className="filter">
        <h1 className="row1">ERROR 404!!!</h1>
        <h1 className="row2">Sorry, Can Not Find What You Want.</h1>
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

export default NotFound;
