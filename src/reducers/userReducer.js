import { FETCH_USERS } from "../actions/types";

const initialState = {
  users: [],
  isUserLoading:true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload,isUserLoading:false };
    default:
      return state;
  }
}
