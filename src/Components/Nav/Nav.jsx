import React from "react";
import c from "./Nav.module.css";

export default function Nav({ movies, onSearch, onSetSearch }) {
  return (
    <nav className={c.n_container}>
      <p className={c.n_brand_name}>🍿 Watch Movies</p>
      <label htmlFor="search">
        <input
          onChange={(e) => onSetSearch(e.target.value)}
          className={c.n_search_bar}
          type="input"
          name="search"
          id="search"
          value={onSearch}
          placeholder="Search movies..."
        />
      </label>
      <p className={c.n_results}>
        Found <span>{movies.length}</span> top results
      </p>
    </nav>
  );
}
