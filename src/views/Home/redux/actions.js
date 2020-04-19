import * as actionTypes from "./actionTypes";

export const fetchTrending = () => {
  return {
    type: actionTypes.FETCH_TRENDING,
  };
};
export const fetchOnSearch = (payload) => {
  return {
    type: actionTypes.FETCH_ON_SEARCH,
    payload,
  };
};
export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START,
  };
};
export const fetchTrendingSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_TRENDING_SUCCESS,
    payload,
  };
};
export const fetchOnSearchSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_ON_SEARCH_SUCCESS,
    payload,
  };
};
export const fetchFail = (payload) => {
  return {
    type: actionTypes.FETCH_FAIL,
    payload,
  };
};
