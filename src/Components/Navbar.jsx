import React from "react";
import styled from "styled-components";
import { Link, BrowserRouter as Router } from "react-router-dom";

const NavItem = styled.ul`
  position: relative;
  top: 0.5em;
  color: white;
  display: inline;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 54px;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Navbar = () => {
  return (
    <div>
      <NavItem>
        <Link style={{ 
          color: "white",
          paddingRight: "1em"
        }} to="/">
          Home
        </Link>
        <Link style={{paddingRight: "1em"}} to="/chip">Chip</Link>
        <Link style={{paddingRight: "1em"}} to="/specialty">Specialty</Link>
        <Link style={{paddingRight: "1em"}} to="/bread">Bread</Link>
        <Link style={{paddingRight: "1em"}} to="/more">More</Link>
      </NavItem>
    </div>
  );
};

export default Navbar;
