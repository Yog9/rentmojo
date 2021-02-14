
import { FETCH_POST_DETAILS } from "./types";
import { itemsLoading } from "./itemsLoadingActions";
export const fetchPostDetails = (postId) => (dispatch) => {
  dispatch(itemsLoading(true));
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.json())
    .then((postsDetails) => {
      dispatch({
        type: FETCH_POST_DETAILS,
        payload: postsDetails,
      });
      dispatch(itemsLoading(false));
    });
};