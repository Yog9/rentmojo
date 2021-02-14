import { DELETE_POST_ERROR, DELETE_POST_SUCCESS } from "../actions/types";

const initialState = {
  post: {},
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETE_POST_SUCCESS:
      return { ...state, post: action.payload };
    case DELETE_POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
