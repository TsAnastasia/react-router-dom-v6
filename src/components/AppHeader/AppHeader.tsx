import React from "react";
import { NavLink } from "react-router-dom";
import { pathToPage } from "../../utils/routes";

const AppHeader = () => (
  <header>
    <NavLink to={pathToPage.home}>Home</NavLink>
    <NavLink to={pathToPage.blog}>Blog</NavLink>
    <NavLink to={pathToPage.about}>About</NavLink>
  </header>
);

export default AppHeader;
