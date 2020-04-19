import React from "react";
import "./moviecard.css";
import { connect } from "react-redux";
import * as actions from "../../views/Details/redux/actions";
import {
  addToWatchLater,
  removeWatchLater,
} from "../../views/WatchLater/redux/actions";
import MoviePoster from "../MoviePoster";

import { getLocalStorage, setLocalStorage } from "../../utils/apiModule";

const MovieCard = (props) => {
  const {
    poster_path,
    title,
    name,
    release_date,
    first_air_date,
    profile_path,
    id,
  } = props.data;

  const watchLaterData = props.watchLaterData.data;
  const index = watchLaterData.findIndex((el) => el.id === id);
  const label = index === -1 ? "Add" : "Remove";

  const addToWatchLater = (e) => {
    e.stopPropagation();
    const localWatchLater = getLocalStorage("watchlater");
    let updateData;
    if (label === "Add") {
      props.addToWatchLater();
      updateData = localWatchLater
        ? [...JSON.parse(localWatchLater), { ...props.data }]
        : [{ ...props.data }];
    } else {
      props.removeWatchLater(index);
      updateData = [...JSON.parse(localWatchLater)];
      updateData.splice(index, 1);
    }
    setLocalStorage("watchlater", JSON.stringify(updateData));
  };
  return (
    <div className="card-container" onClick={props.onClickHandler}>
      <div className="poster-container">
        <MoviePoster
          src={poster_path || profile_path}
          width={200}
          height="240px"
        />
      </div>

      <div className="card-details-container">
        <p>{title || name}</p>
        <p>{release_date || first_air_date}</p>
      </div>
      {props.auth.isAuthenticated ? (
        <button onClick={addToWatchLater}>{label}</button>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    watchLaterData: state.watchLaterReducer,
    auth: state.authReducer,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onClickHandler: () => {
      dispatch(actions.updateCurrPage("details"));
      dispatch(actions.updateCurrItem(props.data));
    },
    addToWatchLater: (data) => {
      dispatch(addToWatchLater(props.data));
    },
    removeWatchLater: (id) => {
      dispatch(removeWatchLater(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
