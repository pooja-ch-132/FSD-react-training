import React from "react";
//import Styles from "../components/navbar.module.css";
const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ marginTop: "10px" }}
        src="https://halfblog.net/wp-content/uploads/2013/07/google-404-robot.png"
      ></img>
      <h1>404! That's an error.</h1>
      <br />

      <p>The requested URL was not found on this server. That'all we know.</p>
    </div>
  );
};

export default PageNotFound;
