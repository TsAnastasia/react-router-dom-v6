import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = (location.state as any)?.from?.pathname;

  const { signin } = useAuth();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <main>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span> <input name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export { LoginPage };
