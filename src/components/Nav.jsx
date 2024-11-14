import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <NavLink to="/cats">Cats</NavLink>
    <NavLink to="/dogs">Dogs</NavLink>
    <NavLink to="/computers">Computers</NavLink>
  </nav>
);

export default Nav;
