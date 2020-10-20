import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link to="/Person" className="navbar-brand">
        React Task List
      </Link>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/Person">{props.userData.firstName}'s Page</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Team">Kanban Board</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Resources">LookUp Resources</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
