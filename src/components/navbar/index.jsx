import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const NavbarIndex = () => {
  return (
    <div className="navigation-bar">
      <nav>
        <ul>
          <li>
            <Link to="/home" />
            Home
          </li>
          <li>
            <Link to="/profile" />
            Profile
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarIndex;
