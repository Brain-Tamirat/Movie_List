import React from "react";
import c from "./Layout.module.css";

export default function Layout({ children }) {
  return <div className={c.lo_container}>{children}</div>;
}
