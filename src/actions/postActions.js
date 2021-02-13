import { FETCH_POSTS } from "./types";

export const fetchPosts = (userId,skip=0) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&skip=${skip}&limit=10`)
    .then((res) => res.json())
    .then((posts) => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      });
    });
};