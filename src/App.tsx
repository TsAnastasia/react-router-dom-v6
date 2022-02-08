import React from "react";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import AppRouter from "./components/AppRouter/AppRouter";

const App = () => (
  <div className="app">
    <AppHeader />

    <AppRouter />

    <AppFooter />
  </div>
);

export default App;
