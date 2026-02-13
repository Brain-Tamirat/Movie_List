import React from "react";
import Landing from "./Pages/Landing/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
      </Routes>
    </BrowserRouter>
  );
}
