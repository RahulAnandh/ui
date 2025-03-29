import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const NavbarIndex = () => {
  return (
    <div className="navigation-bar">
      <h1><div id="red">Red</div><div id="land">Land</div></h1>
      <hr/>
      <nav>
            <h2><Link to="dashboard">Dashboard</Link></h2>
            <h2><Link to="home">Home</Link></h2>
            <h2><Link to="profile">Profile</Link></h2>
            <h2><Link to="employee">Employee</Link></h2>
      </nav>
    </div>
  );
};

export default NavbarIndex;
