import React from "react";
import c from "./Is_Loading.module.css";
import { AiOutlineLoading } from "react-icons/ai";

export default function Is_Loading() {
  return (
    <div className={c.l_container}>
      <AiOutlineLoading />
      <p>Loading...</p>
    </div>
  );
}
