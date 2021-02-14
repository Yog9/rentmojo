import { FETCH_POST_DETAILS } from "../actions/types";

const initialState = {
  postsDetails: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_DETAILS:
      return { ...state, postsDetails: action.payload };
    default:
      return state;
  }
}
