import React from "react";
import c from "./Movie_Func.module.css";

export default function Movie_Func({ children }) {
  return <div className={c.mf_choose}>{children}</div>;
}
