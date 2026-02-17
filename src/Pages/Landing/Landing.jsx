import React, { useEffect, useState } from "react";
import Is_Loading from "../../Components/Is_Loading/Is_Loading";
import Error_Handle from "../../Components/Error_Handle/Error_Handle";
import Layout from "../../Components/Layout/Layout";
import Nav from "../../Components/Nav/Nav";
import Movies from "../../Components/Movies/Movies";
import Container_Box from "../../Components/Container_Box/Container_Box";
import Movie_List from "../../Components/Movie_List/Movie_List";
import Detail_View from "../../Components/Detail_View/Detail_View";
import Your_History from "../../Components/Your_History/Your_History";
import Movie_Func from "../../Components/Movie_Func/Movie_Func";

const API_KEY = "c6381041";

export default function Landing() {
  const [searched_movies, setSearchedMovies] = useState([]);
  const [seen_movies, setSeenMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetailLoading, setMovieDetailLoading] = useState(false);
  const [isError, setIsError] = useState([false, ""]);
  const [search, setSearch] = useState("");
  const [clicked_movie, setClickedMovie] = useState(0);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setIsError([false, ""]);

        if (search == "" || search.length < 3) {
          throw new Error("🍿 Search a Movie? 🎞️");
        }

        const resource = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`,
        );

        const searched_movies = await resource.json();

        if (searched_movies.Response == "False") {
          throw new Error("Movie Not Found!");
        }

        setSearchedMovies(searched_movies.Search);
      } catch (e) {
        console.log(e);
        setIsError(() => [true, e.message]);
        setSearchedMovies([]);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
    return;
  }, [search]);

  const onSelectingMovie = async (id) => {
    setMovieDetailLoading(true);
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`,
    );
    const data = await res.json();
    setClickedMovie(data);
    setMovieDetailLoading(false);
  };

  const onAddToWatchedList = (id, pic, title, star, your_star, min) => {
    setSeenMovies((prev) => {
      if (prev.length != 0) {
        return [...prev, { id, pic, title, star, your_star, min }];
      } else {
        return [{ id, pic, title, star, your_star, min }];
      }
    });
  };

  const onRemoveFromWatchedList = (id) => {
    setSeenMovies((prev) => {
      return prev.filter((val) => {
        console.log("val" + val.id, "id" + id);
        return val.id != id;
      });
    });
  };

  return (
    <Layout>
      <Nav
        movies={searched_movies && searched_movies}
        onSearch={search}
        onSetSearch={(val) => setSearch(val)}
      />
      <Movies>
        <Container_Box>
          {isError[0] ? (
            <Error_Handle msg={`${isError[1]}`} />
          ) : isLoading ? (
            <Is_Loading />
          ) : (
            <Movie_List
              movies={searched_movies && searched_movies}
              onSelectingMovie={onSelectingMovie}
            />
          )}
        </Container_Box>
        <Container_Box>
          <Movie_Func>
            {movieDetailLoading ? (
              <Is_Loading bit_down={{ top: `30px` }} />
            ) : clicked_movie ? (
              <Detail_View
                key={clicked_movie.imdbID}
                id={clicked_movie.imdbID}
                clicked_movie={clicked_movie}
                seen_movies={seen_movies.map((movie) => [
                  movie.id,
                  movie.your_star,
                ])}
                goBack={() => {
                  setClickedMovie(0);
                }}
                addToWatchedList={onAddToWatchedList}
              />
            ) : (
              <Your_History
                watched_movies={seen_movies}
                removeFromWatchedList={onRemoveFromWatchedList}
              />
            )}
          </Movie_Func>
        </Container_Box>
      </Movies>
    </Layout>
  );
}
