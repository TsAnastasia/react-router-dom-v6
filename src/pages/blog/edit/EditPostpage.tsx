import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { AppRoutes } from "../../../utils/routes";

const EditPostpage = () => {
  const id = +useParams().postId!!;
  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () =>
    signout(() => navigate(AppRoutes.BLOG, { replace: true }));

  return (
    <main>
      <h1>Edit post {id}</h1>
      <button type="button" onClick={handleLogout}>
        Log Out
      </button>
    </main>
  );
};

export default EditPostpage;
