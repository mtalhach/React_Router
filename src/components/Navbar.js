import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="about">
        About
      </NavLink>
      <NavLink style={navLinkStyle} to="products">
        Product
      </NavLink>
    </nav>
  );
};

export default Navbar;
