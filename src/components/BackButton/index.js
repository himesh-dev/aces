import React from "react";
import { connect } from "react-redux";
import * as actions from "../../views/Details/redux/actions";

import back from "../../assets/back.svg";
import "./backbutton.css";

const BackButton = (props) => {
  return (
    <div
      style={{ paddingLeft: "5rem", marginTop: "2rem", marginBottom: "2rem" }}
    >
      <button className="backbutton" onClick={props.goBack}>
        <img src={back} width="12" className="back-img" alt="back" />
        <p>Back</p>
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    goBack: () => {
      dispatch(actions.updateCurrPage("home"));
    },
  };
};
export default connect(null, mapDispatchToProps)(BackButton);
