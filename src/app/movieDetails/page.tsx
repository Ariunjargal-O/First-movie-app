"use client";
import { Dispatch, SetStateAction } from "react";

// import { MovieGanList } from "..components/MovieGenList";
import { useEffect, useState } from "react";

type MovieListPropsType = {
  setMovieList: Dispatch<SetStateAction<MovieDetailsType[]>>;
  movieList: <MovieDetaislType>[];
};

import axios from "axios";

import { ChevronRight, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

import { ACCESS_TOKEN } from "@/constants";
import { MovieDetailsType } from "@/constants/Type";

export const UpcomingMovieList = (props: MovieListPropsType) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);


  const getUpcomingMovieList = async () => {
    const upcomingMovieList = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    // console.log(upcomingMovieList);
    setUpcomingMovies(upcomingMovieList.data.results); // haana ni result gdeg zuil bga ve??
  };
  useEffect(() => {
    getUpcomingMovieList();
  }, []);

  return (
    <div>
      {/* <MovieGanList movieList={props.movieList} /> */}
      <div className="px-(--spacing-5)  w-full gap-(--spacing-5) flex justify-between ">
        <p className="text-2xl not-italic font-semibold leading-8">Upcoming</p>

        <Button variant="outline" className="max-w-26 ">
          <div className="flex">
            <span className="text-sm not-italic font-medium leading-4">
              See more
            </span>
            <ChevronRight />
          </div>
        </Button>
      </div>
      <div className="min px-(--spacing-5) py-(--spacing-8) w-full gap-(--spacing-5) grid grid-cols-2 ">
        {upcomingMovies.map((movie: MovieDetailsType) => {
          return (
            <div
              key={movie.title}
              className="bg-[#F4F4F5] rounded-b-lg flex flex-col"
            >
              <img
                className="w-[157px] h-auto rounded-t-lg "
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
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
          );
        })}
      </div>
    </div>
  );
};
