import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { postAPI } from "../../api/post/postAPI";
import { pathToPage } from "../../utils/routes";
import { IPost } from "../../utils/types";
import BlogFilter from "./filter/BlogFilter";

const Blogpage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");

  const startsFrom = latest ? 80 : 1;

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

        <Link to={pathToPage.postAdd}>Add new post</Link>
      </section>
      <section>
        <h2>Posts</h2>
        <BlogFilter
          postQuery={postQuery}
          latest={latest}
          setSearchParams={setSearchParams}
        />
        <ul>
          {posts
            .filter(
              (post) => post.title.includes(postQuery) && post.id >= startsFrom
            )
            .map((post) => (
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
