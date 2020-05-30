import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Watchlist
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Titles List
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Add Title 
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/info" className="nav-link">
              Title Info
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/user" className="nav-link">
              Create User
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
