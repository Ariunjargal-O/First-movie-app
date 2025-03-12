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

        {movieList.map((movie: Movie) => {
          return (
            <div>
              <div>
                <img
                  className="w-full "
                  src={`https://image.tmdb.org/t/p/w300${movie.popularity}`}
                />
                <div className="flex w-full justify-between gap-[2px]">
                  <div className="flex flex-col">
                    {" "}
                    <p className="text-[14px] not-italic font-normal leading-5">
                      Now playing:
                    </p>
                    <p className="text-2xl not-italic font-semibold leading-8 ">
                      {movie.title}
                    </p>
                  </div>
                  <div className="flex">
                    <img className="w-4 h-4" src="icon-star.png" />
                    <p className="text-3 font-medium leading-4">
                      {movie.vote_average}
                    </p>
                    <span className="text-3 font-normal leading-4 text-[color:--text-text-muted-foreground]">
                      /10
                    </span>
                  </div>
                </div>

                <p className="text-[14px] font-normal not-italic leading-5 py-4">
                  {}
                </p>
                <button>
                  <div className="bg-black flex gap-1 p-2 items-center rounded-2xl">
                    <img src="icon-play.png" />
                    <p className="text-white ">Watch Trailer</p>
                  </div>
                </button>
              </div>
            </div>
          );
        })}

        <MovieList
        // onChange = {(string) => setMovieList([...movielist])}
        // setMovieList={setMovieList}
        // movieList = {movieList}
        ></MovieList>
      </div>

      {movieList.map((movie: Movie) => {
        return (
          <div key={movie.title}>
            <div className="flex justify-between items-center">
              <p className="text-2xl not-italic font-semibold leading-8">
                {movie.genre_ids}
              </p>
              <div className="flex gap-2">
                <a className="text-sm not-italic font-medium leading-4">
                  {" "}
                  See more{" "}
                </a>
                <img className="w-4 h-4" src="icon-arrow-right.png" />
              </div>
            </div>
            <div className="flex flex-col">
              <img
                className="w-[157px] h-auto rounded-t-lg"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              />

              <div className="p-8 bg-[#F4F4F5] gap-1 rounded-b-lg">
                <div className="flex gap-1 items-center">
                  <img className="w-4 h-4" src="icon-star.png" />
                  <p className="text-xs font-medium leading-4">
                    {movie.vote_average}
                  </p>
                  <span className="text-xs font-normal leading-4 text-[color:--text-text-muted-foreground]">
                    /10
                  </span>
                </div>
                <h1 className="w-full h-auto text-[14px] font-normal leading-5 not-italic text-ellipsis  ">
                  {movie.title}
                </h1>
              </div>
            </div>
          </div>
        );
      })}
      <Footer></Footer>
    </div>
  );
}
