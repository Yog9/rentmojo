import { FETCH_USERS } from "./types";
import { itemsLoading } from "./itemsLoadingActions";
export const fetchUsers = () => (dispatch) => {
    dispatch(itemsLoading(true));
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      dispatch({
        type: FETCH_USERS,
        payload: users,
      });
        dispatch(itemsLoading(false));
    });
};
