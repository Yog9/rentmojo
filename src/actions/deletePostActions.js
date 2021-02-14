import {
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
//   DELETE_POST_PENDING,
} from "./types";
import { itemsLoading } from "./itemsLoadingActions";
export const deletePost = (postId) => (dispatch) => {
    dispatch(itemsLoading(true));
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "delete",
  })
    .then((res) =>res.json() )
    .then((post) => {
      if (post.error) {
        throw post.error;
      }
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: post,
      });
      dispatch(itemsLoading(false));
    })
    .catch((error) => {
      dispatch({
        type: DELETE_POST_ERROR,
        payload: error,
      });
    });
};
