import * as actionTypes from "./actionTypes";

export const updateCurrPage = (payload) => {
  return {
    type: actionTypes.UPDATE_CURR_PAGE,
    payload
  };
};
export const updateCurrItem = (payload) => {
  return {
    type: actionTypes.UPDATE_CURR_ITEM,
    payload,
  };
};
