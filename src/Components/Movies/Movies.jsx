import React from "react";
import c from "./Movies.module.css";

export default function Movies({ children }) {
  return <main className={c.m_container}>{children}</main>;
}
