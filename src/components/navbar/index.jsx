import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const NavbarIndex = () => {
  return (
    <div className="navigation-bar">
      <nav>
        <ul>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="employee">Employee</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarIndex;
