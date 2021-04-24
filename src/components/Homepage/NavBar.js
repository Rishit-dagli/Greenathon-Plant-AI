import React from "react";
import { Link } from "react-scroll";

const NavBar = ({onTryNowClick}) => {
  return (
    <div className="navbar">
      <h3 className="logo">Plant AI</h3>
      <nav>
        <Link to="instructions" smooth={true} duration={500} className="navbar-link">
          How it works?
        </Link>
        <Link to="blog" smooth={true} duration={500} className="navbar-link">
          Learn More
        </Link>
        <button href="#" className="navbar-link button" onClick={onTryNowClick}>
          Try Plant AI
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
