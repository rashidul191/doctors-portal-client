import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h5>Error !!! Sorry page not found</h5>
      <h1 className="text-lg">404</h1>
      <Link to="/">
        {" "}
        <p>Back to Home</p>{" "}
      </Link>
    </div>
  );
};

export default NotFound;
