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

// const movies = [
//   {
//     Poster: "Pictures/inception.jpg",
//     Title: "inception",
//     Year: 2010,
//     imdbID: 1,
//   },
//   {
//     Poster: "Pictures/the matrix.jpg",
//     Title: "the matrix",
//     Year: 1999,
//     imdbID: 2,
//   },
//   {
//     Poster: "Pictures/parasite.webp",
//     Title: "parasite",
//     Year: 2019,
//     imdbID: 3,
//   },
// ];

const watched_movies = [
  {
    pic: "Pictures/inception.jpg",
    title: "inception",
    star: 8.8,
    your_star: 10,
    min: 148,
  },
  {
    pic: "Pictures/back to the future.jpg",
    title: "back to the future",
    star: 8.5,
    your_star: 9,
    min: 116,
  },
];

export default function Landing() {
  const [searched_movies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
        // console.log(e);
        setIsError(() => [true, e.message]);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
    return;
  }, [search]);

  const onSelectingMovie = async (id) => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`,
    );
    const data = await res.json();
    console.log(data);
    setClickedMovie(data);
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
            {clicked_movie ? (
              <Detail_View
                clicked_movie={clicked_movie}
                goBack={() => {
                  setClickedMovie(0);
                }}
              />
            ) : (
              <Your_History watched_movies={watched_movies} />
            )}
          </Movie_Func>
        </Container_Box>
      </Movies>
    </Layout>
  );
}
