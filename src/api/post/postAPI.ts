const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const postAPI = {
  getAllPosts: () => fetch(BASE_URL).then((res) => res.json()),
  getPost: (postId: number) =>
    fetch(`${BASE_URL}/${postId}`).then((res) => res.json()),
};
