import React, { useState } from "react";
import c from "./Detail_View.module.css";
import Rate_Star from "../Rate_Star/Rate_Star";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function Detail_View({ clicked_movie, goBack }) {
  const [catchRating, setCatchRating] = useState(0);
  function onSetRating(val) {
    setCatchRating(val);
  }
  return (
    <div className={c.mf_description}>
      <p onClick={goBack} className={c.mf_d_back}>
        <span>
          <FaLongArrowAltLeft size={25} />
        </span>
      </p>
      <div className={c.mf_d_movie_detail}>
        <div className={c.mf_d_md_pic}>
          <img src={clicked_movie.Poster} alt={clicked_movie.Title} />
        </div>
        <div className={c.mf_d_md_details}>
          <h2 className={c.mf_d_md_d_title}>{clicked_movie.Title}</h2>
          <p className={c.mf_d_md_d_time}>
            {clicked_movie.Released} - {clicked_movie.Runtime}
          </p>
          <p className={c.mf_d_md_d_genre}>{clicked_movie.Genre}</p>
          <p className={c.mf_d_md_d_rating}>
            ⭐ {clicked_movie.imdbRating} IMDb rating
          </p>
          {catchRating > 0 && ""}
        </div>
      </div>
      <div className={c.mf_d_more}>
        <div>
          <Rate_Star
            starlength={10}
            message="Nothing To Say, Still Nothing, Very Little Progress, 4 is Still Little, Half Way There, Some How you Pass Half MileStone, 7 is Holy Number, 2 More For Full Rate, What Else Could You Want, You Have Reached The Limit! Well Done 😁"
            onSetRating={onSetRating}
          />
          {catchRating > 0 && <div className={c.mf_d_m_msg}>+ Add to list</div>}
        </div>
        <div>
          <p className={c.mf_d_brief}>
            <span>{clicked_movie.Plot}</span>
            <span>Staring {clicked_movie.Actors}</span>
            <span>Directed By: {clicked_movie.Director}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
