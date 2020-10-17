import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        React Task List
      </a>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="/Person">Daria's Page</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Team">Team Board</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Resources">Resources</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Login">Login</a>
        </li>
      </ul>
    </nav>
    </Router>
  );
}

export default Nav;
