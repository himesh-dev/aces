import * as actionTypes from "./actionTypes";

const initialState = {
  data: [],
  searchedData: [],
  text: "",
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actionTypes.FETCH_ON_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        text: action.payload.text,
        searchedData: action.payload.searchedMedia,
      };
    case actionTypes.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
