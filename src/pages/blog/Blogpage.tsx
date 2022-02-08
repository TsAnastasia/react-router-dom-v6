import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postAPI } from "../../api/post/postAPI";
import { pathToPage } from "../../utils/routes";
import { IPost } from "../../utils/types";

const Blogpage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    postAPI
      .getAllPosts()
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <section>
        <h1>Our news</h1>
        <Link to="/posts/new">Add new post</Link>
      </section>
      <section>
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={pathToPage.post(post.id)}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Blogpage;
