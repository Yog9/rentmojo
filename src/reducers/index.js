import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";
import postsDetails from "./postDetailsReducer";
import commentsReducer from "./commentsReducer"
import postDeleteReducer from "./postDeleteReducer";
import itemsloadingReducer from "./itemsLoadingReducer";

export default combineReducers({
 isLoading: itemsloadingReducer,
  users: userReducer,
  posts: postsReducer,
  postsDetails:postsDetails,
  comments:commentsReducer,
  post:postDeleteReducer,
});
