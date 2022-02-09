import React, { Suspense } from "react";
import { Link, Outlet /* , Route, Routes */ } from "react-router-dom";
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

    {/* <Routes>
      <Route path="contacts" element={<p>Our contact</p>} />
      <Route path="team" element={<p>Our team</p>} />
    </Routes> */}
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  </main>
);

export default Aboutpage;
