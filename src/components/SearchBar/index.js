import React, { useState } from "react";
import "./searchBar.css";

import { connect } from "react-redux";
import * as actions from "../../views/Home/redux/actions";

const SearchBar = (props) => {
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

  const onInputHandler = (e) => {
    setSearchText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (searchText === "") {
      setError("Enter text to search");
      return;
    }
    props.fetchOnSearch(searchText);
  };
  return (
    <>
      <div className="searchbar-container">
        <form
          className="searchbar-form"
          onSubmit={onSubmitHandler}
          onBlur={() => setError(null)}
        >
          <input
            className="searchbar"
            type="text"
            value={searchText}
            onChange={onInputHandler}
            placeholder="Search Movies or TV shows"
          />
          <input type="submit" className="search-button" value="Search" />
        </form>
      </div>
      {error ? <p className="error-text">{error}</p> : null}
    </>
  );
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchOnSearch: (text) => dispatch(actions.fetchOnSearch(text)),
  };
};
export default connect(null, mapDispatchToProps)(SearchBar);
