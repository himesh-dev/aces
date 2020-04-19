import React from "react";
import "./description.css";
import Poster from "../Poster";
import { connect } from "react-redux";

const Description = (props) => {
  const {
    poster_path,
    title,
    name,
    first_air_date,
    release_date,
    overview,
    profile_path,
    vote_average,
  } = props.data.currItem;
  return (
    <div className="details-container">
      <div className="details-poster-container">
        <Poster src={poster_path || profile_path} width={300} />
      </div>
      <div>
        <table cellSpacing="5" style={{ marginTop: "1rem" }}>
          <tbody>
            <tr>
              <th>Title:</th>
              <td>{title || name}</td>
            </tr>
            {release_date || first_air_date ? (
              <tr>
                <th>Release Date:</th>
                <td>{release_date || first_air_date}</td>
              </tr>
            ) : null}
            {vote_average ? (
              <tr>
                <th>Average vote:</th>
                <td>{vote_average * 10 + "%"}</td>
              </tr>
            ) : null}
            {overview ? (
              <tr>
                <th>Overview:</th>
                <td>{overview}</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    data: state.detailsReducer,
  };
};
export default connect(mapStateToProps)(Description);
