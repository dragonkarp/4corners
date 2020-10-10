import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav() {
  return (
    // <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Task List
      </a>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/person">Daria's Page</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/team">Team Board</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resources">Resources</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">CreateAccount</Link>
        </li>
      </ul>
    </nav>
    // </Router>
  );
}

export default Nav;
