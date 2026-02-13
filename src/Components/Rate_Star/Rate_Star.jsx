import React, { useState } from "react";
import c from "./Rate_Star.module.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Rate_Star({
  starlength = 5,
  color = "#e7bf36",
  size = 20,
  c_Name = "",
  defualt_rating = 0,
  message = "",
  onSetRating,
}) {
  const [rating, setRating] = useState(defualt_rating);
  const [temp_rate, setTempRate] = useState(0);

  let sent_message = [];
  if (message.length > 0) {
    sent_message = message.split(",", starlength);
  }

  const text_style = {
    color: color,
    fontSize: `${size}px`,
  };

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }
  function handleHoverIn(rating) {
    setTempRate(rating);
  }
  function handleHoverOut() {
    setTempRate(0);
  }

  return (
    <div>
      <ul className={`${c.mf_d_m_stars} ${c_Name}`}>
        {Array.from({ length: starlength }, (_, i) => {
          return (
            <li
              key={i + 1}
              id={i + 1}
              onClick={() => handleRating(i + 1)}
              onMouseEnter={() => handleHoverIn(i + 1)}
              onMouseLeave={() => handleHoverOut()}
            >
              {(temp_rate ? temp_rate < i + 1 : rating < i + 1) ? (
                <FaRegStar color={color} size={`${size}px`} />
              ) : (
                <FaStar color={color} size={`${size}px`} />
              )}
            </li>
          );
        })}
        <li style={text_style}>
          {!sent_message && (temp_rate || rating || "")}
        </li>
      </ul>
      {sent_message.length == starlength ? (
        <span className={c.given_star} style={text_style}>
          {sent_message[temp_rate - 1] || sent_message[rating - 1]}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
