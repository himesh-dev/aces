import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import "./App.css";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
// import Login from "./views/Login";
// import Home from "./views/Home";
import { getLocalStorage } from "./utils/apiModule";
import { login } from "./views/Login/redux/actions";
import { updateCurrPage } from "./views/Details/redux/actions";
import { addToWatchLater } from "./views/WatchLater/redux/actions";
function App(props) {
  useEffect(() => {
    const token = getLocalStorage("token");
    if (token) {
      props.loginAndNavigate(token);
    }
  }, []);
  useEffect(() => {
    const localWatchLater = getLocalStorage("watchlater");
    let data = localWatchLater ? [...JSON.parse(localWatchLater)] : [];
    props.addToWatchLater(data);
  }, []);

  const { currPage } = props.data;

  let Component;

  switch (currPage) {
    case "details":
      Component = lazy(() => import("./views/Details"));
      break;
    case "watchlater":
      Component = lazy(() => import("./views/WatchLater"));
      break;
    case "login":
      Component = lazy(() => import("./views/Login"));
      break;
    default:
      Component = lazy(() => import("./views/Home"));
      break;
  }
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Component />
      </Suspense>
    </div>
  );
}
const mapStateToProps = (state, props) => {
  return {
    data: state.detailsReducer,
    auth: state.authReducer,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    loginAndNavigate: (token) => {
      dispatch(login(token));
      dispatch(updateCurrPage("home"));
    },
    addToWatchLater: (data) => {
      dispatch(addToWatchLater(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
