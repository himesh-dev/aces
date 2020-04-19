import * as actionTypes from "./actionTypes";

const initialState = {
  currPage: "home",
  currItem: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CURR_PAGE:
      return {
        ...state,
        currPage: action.payload,
      };

    case actionTypes.UPDATE_CURR_ITEM:
      return {
        ...state,
        currItem: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
