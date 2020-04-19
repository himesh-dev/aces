import { put, takeEvery, call } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";

import { axiosInstance, API_KEY } from "../../../utils/apiModule";

function* fetchTrendingSaga() {
  yield put(actions.fetchStart());
  const params = {
    api_key: API_KEY,
  };
  const url = `trending/all/day`;
  try {
    const response = yield call(axiosInstance.get, url, { params });
    yield put(actions.fetchTrendingSuccess(response.data.results));
  } catch (err) {
    yield put(actions.fetchFail());
  }
}

function* fetchOnSearchSaga(action) {
  yield put(actions.fetchStart());
  const params = {
    api_key: API_KEY,
    query: action.payload,
  };
  const url = "search/multi";
  try {
    const response = yield call(axiosInstance.get, url, { params });
    let data = response.data.results;
    let text = `Search Results for "${action.payload}"`;
    if (data.length === 0) {
      text = `No Results found for "${action.payload}"`;
    }
    yield put(
      actions.fetchOnSearchSuccess({
        searchedMedia: response.data.results,
        text: text,
      })
    );
  } catch (err) {
    yield put(actions.fetchFail());
  }
}

export function* watchFetch() {
  yield takeEvery(actionTypes.FETCH_TRENDING, fetchTrendingSaga);
  yield takeEvery(actionTypes.FETCH_ON_SEARCH, fetchOnSearchSaga);
}
