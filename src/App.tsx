import React from "react";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import AppRouter from "./components/AppRouter/AppRouter";
import { AuthProvider } from "./components/hoc/AuthProvider";

const App = () => (
  <div className="app">
    <AppHeader />

    <AuthProvider>
      <AppRouter />
    </AuthProvider>

    <AppFooter />
  </div>
);

export default App;
