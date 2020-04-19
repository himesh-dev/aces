import React from "react";
import "./main.css";

import MovieCard from "../MovieCard";
import Loader from "../Loader";

const Main = (props) => {
  const { data, loading, label } = props;

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <p className="main-title">{label}</p>
      <div className="main-container">
        {data.length > 0
          ? data.map((item) => {
              return <MovieCard key={item.id} data={item} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Main;
