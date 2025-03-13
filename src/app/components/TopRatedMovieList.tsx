"use client";
import { Dispatch, SetStateAction } from "react";
import { MovieType } from "./constants/type";
import { MovieGanList } from "./MovieGenList";
import { useEffect, useState } from "react";
import axios from "axios";
import { ACCESS_TOKEN, BASE_IMAGE_URL } from "../constants";
import { instance } from "../axios-instance/utils/axios-instance";

type MovieListPropsType = {
  setMovieList: Dispatch<SetStateAction<MovieType[]>>;
  movieList: MovieType[];
};

export const TopRatedMovieList = (props: MovieListPropsType) => {
  const [topRatedMovies, setTopRatedMovieList] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const getTopRatedMovieList = async () => {
    const topRatedMovieList = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    setTopRatedMovieList(topRatedMovieList.data.results);
  };

  useEffect(() => {
    getTopRatedMovieList();
  }, []);

  return (
    <div>
      {/* <MovieGanList movieList={props.movieList} /> */}
      <div className="px-(--spacing-5) py-(--spacing-8) w-full gap-(--spacing-5) grid grid-cols-2">
        {topRatedMovies.map((movie: MovieType) => {
          return (
            <div key={movie.title} className="bg-[#F4F4F5] rounded-b-lg">
              <div className="flex flex-col">
                <img
                  className="w-[157px] h-auto rounded-t-lg "
                  src={`${BASE_IMAGE_URL}/w200${movie.poster_path}`}
                />

                <div className="p-(--spacing-2) gap-1  ">
                  <div className="flex gap-1 items-center">
                    <img className="w-4 h-4" src="icon-star.png" />
                    <p className="text-xs font-medium leading-4">
                      {movie.vote_average}
                    </p>
                    <span className="text-xs font-normal leading-4 text-(--text-text-muted-foreground)">
                      /10
                    </span>
                  </div>
                  <h1 className=" text-[14px] font-normal leading-5 not-italic text-ellipsis  pt-1">
                    {movie.title}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
