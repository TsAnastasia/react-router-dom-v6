import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../utils/routes";

const Notfoundpage = () => (
  <main>
    <h1>This page doesn't exist.</h1>
    <p>
      Go <Link to={AppRoutes.HOME}>home</Link>
    </p>
  </main>
);

export default Notfoundpage;
