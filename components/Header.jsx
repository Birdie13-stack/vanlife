import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="main-nav">
      <Link to="/" className="name">
        #VANLIFE
      </Link>

      <div className="links">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-nav" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active-nav" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-nav" : null)}
        >
          Host
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
