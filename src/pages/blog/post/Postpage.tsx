import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postAPI } from "../../../api/post/postAPI";
import { pathToPage } from "../../../utils/routes";
import { IPost } from "../../../utils/types";

const Postpage = () => {
  const id = +useParams().postId!! || null;
  const navigate = useNavigate();
  const [post, setPost] = useState<IPost | null>(null);

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  useEffect(() => {
    id &&
      postAPI
        .getPost(id)
        .then((data) => setPost(data))
        .catch((error) => console.log(error));
  }, [id]);

  return (
    <main>
      <button type="button" onClick={goBack}>
        Go back
      </button>
      <button type="button" onClick={goHome}>
        Go home
      </button>

      {id ? (
        post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to={pathToPage.postEdit(id)}>Edit this post</Link>
          </>
        )
      ) : (
        <p>Wrong post id</p>
      )}
    </main>
  );
};

export default Postpage;
