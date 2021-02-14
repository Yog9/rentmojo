import { FETCH_COMMENTS } from "./types";
import { itemsLoading } from "./itemsLoadingActions";

export const fetchComments = (postId) => (dispatch) => {
  dispatch(itemsLoading(true));
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((res) => res.json())
    .then((comments) => {
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments,
      });
      dispatch(itemsLoading(false));
    });
};
