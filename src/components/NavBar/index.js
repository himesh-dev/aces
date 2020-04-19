import React from "react";
import "./navBar.css";
import { connect } from "react-redux";

import { logout } from "../../views/Login/redux/actions";
import { updateCurrPage } from "../../views/Details/redux/actions";
import { removeLocalStorage } from "../../utils/apiModule";

const NavBar = (props) => {
  const updateCurrPage = (e) => {
    props.updateCurrPage(e.target.value);
  };
  const onLogout = () => {
    removeLocalStorage("token");
    props.logout();
    props.updateCurrPage("home");
  };
  return (
    <div className="navbar-container">
      <h3>The Movie DB</h3>
      <div>
        {!props.auth.isAuthenticated ? (
          props.page.currPage !== "login" ? (
            <button value="login" onClick={updateCurrPage}>
              Login
            </button>
          ) : null
        ) : (
          <>
            {props.page.currPage !== "watchlater" ? (
              <button value="watchlater" onClick={updateCurrPage}>
                Watch Later
              </button>
            ) : null}
            <button onClick={onLogout}>Logout </button>
          </>
        )}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    updateCurrPage: (page) => dispatch(updateCurrPage(page)),
    logout: () => dispatch(logout()),
  };
};
const mapStateToProps = (state, props) => {
  return {
    auth: state.authReducer,
    page: state.detailsReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
