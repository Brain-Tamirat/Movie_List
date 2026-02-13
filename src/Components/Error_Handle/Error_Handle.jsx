import React from "react";
import c from "./Error_Handle.module.css";

export default function Error_Handle({ msg }) {
  return (
    <div className={c.e_container}>
      <p>{msg}</p>
    </div>
  );
}
