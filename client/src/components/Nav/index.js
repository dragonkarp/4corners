import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import logo from "../Nav/4corners_white.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <img className="navLogo" src={logo} alt="Logo"/>
      <Link to="/Person" className="navbar-brand">
        React Task List
      </Link>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/Person">Daria's Page</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Team">Team Board</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Resources">Resources</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
