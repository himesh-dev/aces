import * as actionTypes from "./actionTypes";

export const addToWatchLater = (payload) => {
  if (!Array.isArray(payload)) {
    payload = [payload];
  }
  return {
    type: actionTypes.ADD_TO_WATCHLATER,
    payload,
  };
};
export const removeWatchLater = (payload) => {
  return {
    type: actionTypes.REMOVE_WATCHLATER,
    payload,
  };
};
