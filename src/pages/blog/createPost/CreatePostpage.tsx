import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { AppRoutes } from "../../../utils/routes";

const CreatePostpage = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () =>
    signout(() => navigate(AppRoutes.BLOG, { replace: true }));

  return (
    <main>
      <h1>Create a post</h1>
      <button type="button" onClick={handleLogout}>
        Log Out
      </button>
    </main>
  );
};

export default CreatePostpage;
