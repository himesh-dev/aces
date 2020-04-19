import * as actionTypes from "./actionTypes";

const initialState = {
  isAuthenticated: false,
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: "",
      };
    default:
      return state;
  }
};

export default reducer;
