import React from "react";
import c from "./Movie_Func.module.css";
import Detail_View from "../Detail_View/Detail_View";
import Your_History from "../Your_History/Your_History";

export default function Movie_Func({ children }) {
  return <div className={c.mf_choose}>{children}</div>;
}
