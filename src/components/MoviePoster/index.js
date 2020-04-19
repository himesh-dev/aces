import React from "react";
import "./movieposter.css";
import image from "../../assets/photo.svg";

const imageBaseUrl = "http://image.tmdb.org/t/p";

const MoviePoster = ({ src, width, height }) => {
  return src ? (
    <img
      className="poster"
      loading="lazy"
      height={height}
      src={`${imageBaseUrl}/w${width}${src}`}
      alt="Movie Poster"
    />
  ) : (
    <div className="placeholder-image">
      <img src={image} height="50px" alt="poster" style={{ margin: "auto" }} />
    </div>
  );
};

export default MoviePoster;
