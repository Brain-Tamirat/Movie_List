import React from "react";
import c from "./Your_History.module.css";
import Single_Movie from "../Single_Movie/Single_Movie";

export default function Your_History({ watched_movies }) {
  const avg_star = watched_movies.reduce((pv, cv, _, arr) => {
    return ((pv.star + cv.star) / arr.length).toFixed(2);
  });
  const avg_your_star = watched_movies.reduce((pv, cv, _, arr) => {
    return ((pv.your_star + cv.your_star) / arr.length).toFixed(1);
  });
  const avg_min = watched_movies.reduce((pv, cv, _, arr) => {
    return ((pv.min + cv.min) / arr.length).toFixed(0);
  });
  return (
    <div>
      <div className={c.mf_watch_list}>
        <h2 className={c.mf_wl_title}>movies you watched</h2>
        <div className={c.mf_wl_info}>
          <p className={c.mf_wl_i_num}>#️⃣ {watched_movies.length} movies</p>
          <p className={c.mf_wl_i_star}>⭐ {avg_star}</p>
          <p className={c.mf_wl_i_your_star}>🌟 {avg_your_star}</p>
          <p className={c.mf_wl_i_min}>⌛ {avg_min} min</p>
        </div>
      </div>
      <div className={c.mf_wl_movies}>
        {watched_movies.map((val, index) => {
          return (
            <Single_Movie
              key={index + 1}
              id={"watched" + (index + 1)}
              pic={val.pic}
              title={val.title}
              star={val.star}
              your_star={val.your_star}
              min={val.min}
            />
          );
        })}
      </div>
    </div>
  );
}
