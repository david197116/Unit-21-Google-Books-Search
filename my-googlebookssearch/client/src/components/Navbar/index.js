import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar__brand" to="/">
        Google Books Search
      </Link>
      <div className="navbar__nav">
      <Link to="/register" className="navbar__nav--item">
          Register
        </Link>
      <Link to="/login" className="navbar__nav--item">
          Login
        </Link>
        <Link to="/saved" className="navbar__nav--item">
          Saved
        </Link>
        <Link to="/search" className="navbar__nav--item">
          Search
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
