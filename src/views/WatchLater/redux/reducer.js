import * as actionTypes from "./actionTypes";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  let { data } = state;
  switch (action.type) {
    case actionTypes.ADD_TO_WATCHLATER:
      //   data.push(action.payload);
      return {
        ...state,
        data: [...data, ...action.payload],
      };
    case actionTypes.REMOVE_WATCHLATER:
      data.splice(action.payload, 1);
      return {
        ...state,
        data: data,
      };
    default:
      return state;
  }
};

export default reducer;
