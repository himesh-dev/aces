import React, { useEffect } from "react";
import { connect } from "react-redux";

import SearchBar from "../../components/SearchBar";
import Main from "../../components/Main";
import * as actions from "./redux/actions";

const Home = (props) => {
  useEffect(() => {
    const fetchTrending = async () => {
      await props.fetchTrending();
    };
    fetchTrending();
  }, []);
  const { data, loading, text, searchedData } = props.homeState;
  const label = text || "Trending";
  let updatedData = searchedData.length > 0 ? searchedData : data;
  return (
    <>
      <SearchBar />
      <Main data={updatedData} loading={loading} label={label} />
    </>
  );
};
const mapStateToProps = (state, props) => {
  return {
    homeState: state.homeReducer,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchTrending: () => dispatch(actions.fetchTrending()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
