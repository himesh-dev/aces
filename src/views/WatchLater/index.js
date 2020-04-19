import React from "react";
import { connect } from "react-redux";
import { addToWatchLater } from "./redux/actions";
import BackButton from "../../components/BackButton";
import Main from "../../components/Main";

const WatchLater = (props) => {
 
  const { data } = props.watchLaterState;
  let label =
    data.length > 0 ? "Watch Later List" : "No Items in your Watch Later List";
  return (
    <>
      <BackButton />
      <Main data={data} label={label} />
    </>
  );
};
const mapStateToProps = (state, props) => {
  return {
    watchLaterState: state.watchLaterReducer,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    addToWatchLater: (data) => {
      dispatch(addToWatchLater(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WatchLater);
