import React, { useState } from "react";
import c from "./Container_Box.module.css";

export default function Container_Box({ children }) {
  const [openCheck, setOpenCheck] = useState(true);
  return (
    <section className={c.box_container}>
      <p
        onClick={() => {
          setOpenCheck((prev) => !prev);
        }}
        className={`${c.box_collapse} ${openCheck ? "" : c.box_plus}`}
      >
        <span>{openCheck ? "-" : "+"}</span>
      </p>
      {openCheck && children}
    </section>
  );
}
