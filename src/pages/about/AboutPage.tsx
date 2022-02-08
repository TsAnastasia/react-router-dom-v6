import React from "react";
import { Link, Outlet } from "react-router-dom";
import { pathToPage } from "../../utils/routes";

const Aboutpage = () => (
  <main>
    <section>
      <h1>About us</h1>
      <p>This is a demo website about React-router-dom library.</p>
      <ul>
        <li>
          <Link to={pathToPage.contacts}>Our Contacts</Link>
        </li>
        <li>
          <Link to={pathToPage.team}>Our Team</Link>
        </li>
      </ul>
    </section>
    
    <Outlet />
  </main>
);

export default Aboutpage;
