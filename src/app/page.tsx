"use client";
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { MainPage } from "./components/MainPage";
import { MovieList } from "./components/movielist";
import { Footer } from "./components/Footer";

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; // --> ni static type bichiglel. Array<number> gj bichvel generic type bichiglel
  id: number;
  original_language: string;
  orignal_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function HOME() {
  const [movieList, setMovieList] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  const getMovies = async () => {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    console.log(movies);
    setMovieList(movies.data.results); // haana ni result gdeg zuil bga ve??
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Header></Header>
      <div>
        <MainPage />
        <MovieList 
        // onChange = {(string) => setMovieList([...movielist])}
        // setMovieList={setMovieList}
        // movieList = {movieList}
        ></MovieList>
        <Footer></Footer>
      </div>

  

      {movieList.map((movie: Movie) => {
        return (<div key={movie.title}>
          <img className="w-[157px] " src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
          <p>{movie.vote_average}/10</p>
          <h1>{movie.title}</h1>
          </div>);
      })}
    </div>
  );
}
