import { FETCH_POSTS } from "../actions/types";

const initialState = {
  posts: [],
  isPostsLoading:true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload,isPostsLoading:false };
    default:
      return state;
  }
}
