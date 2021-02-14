import { ITEMS_LOADING } from "../actions/types";
const initialState = {
    isLoading: true
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_LOADING:
            return {
              ...state,
              isLoading: action.payload,
            };
        default:
            return state;
    }
};