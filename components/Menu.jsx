import React from "react";
import Styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={Styles.menuBlock}>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/classroom">Classroom</Link>
        </li>
        <li>
          <Link to="/assessments">Assessments</Link>{" "}
          {/* Fixed path from "assessment" to "assessments" */}
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
