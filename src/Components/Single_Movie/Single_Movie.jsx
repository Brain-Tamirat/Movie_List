import React from "react";
import c from "./Single_Movie.module.css";

export default function Single_Movie({
  id,
  pic,
  title,
  date,
  star,
  your_star,
  min,
  onSelectingMovie,
}) {
  return (
    <div
      onClick={() => {
        onSelectingMovie(id);
      }}
      className={c.sm_container}
      id={id}
    >
      <img className={c.ml_m_pic} src={pic} alt="Not Found!" />
      <div className={c.ml_m_content}>
        <h2 className={c.ml_m_title}>{title}</h2>
        {date == null ? (
          <ul className={c.mf_wl_m_m_d_list}>
            <li>⭐ {star}</li>
            <li>🌟 {your_star}</li>
            <li>⌛ {min} min</li>
          </ul>
        ) : (
          <p className={c.ml_m_date}>🗓️ {date}</p>
        )}
      </div>
    </div>
  );
}
