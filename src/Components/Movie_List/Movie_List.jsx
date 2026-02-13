import React from "react";
import c from "./Movie_List.module.css";
import Single_Movie from "../Single_Movie/Single_Movie";

export default function Movie_List({ movies, onSelectingMovie }) {
  return (
    <div className={c.ml_movies}>
      {movies.map((val) => {
        return (
          <Single_Movie
            key={val.imdbID}
            id={val.imdbID}
            pic={val.Poster}
            title={val.Title}
            date={val.Year}
            onSelectingMovie={onSelectingMovie}
          />
        );
      })}
    </div>
  );
}
