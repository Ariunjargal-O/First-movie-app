"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN, BASE_IMAGE_URL } from "../constants";
import { instance } from "../axios-instance/utils/axios-instance";
import { MovieType } from "../constants/Type";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const PopularMovieList = () => {
  const [popularMovies, setPopularMovieList] = useState([]);

  // const options = {
  //   method: "GET",
  //   url: "https://api.themoviedb.org/3/movie/popular",
  //   params: { language: "en-US", page: "1" },
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmFlZjQwNDEzODJiOWVjMWYzOGNhYWJmMTU3NjYyMyIsIm5iZiI6MTc0MTU3OTQ3Mi4zNTY5OTk5LCJzdWIiOiI2N2NlNjRkMDU5YWUwM2VmZTMyYWE5ZTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JaSdOfIvK_7c048Nv1v_7KpiphyE5h65KzRmJviVonY",
  //   },
  // };

  const getPopularMovieList = async () => {
    const popularMovieList = await instance.get("/movie/top_rated");
    // axios.get(
    //   "https://api.themoviedb.org/3/movie/top_rated",
    //   {
    //     headers: {
    //       Authorization: `Bearer ${ACCESS_TOKEN}`,
    //     },
    //   }
    // );
    // console.log(popularMovieList)
    setPopularMovieList(popularMovieList.data.results);
  };
  useEffect(() => {
    getPopularMovieList();
  }, []);

  return (
    <div>
      {/* <MovieGanList movieList={props.movieList} /> */}
      <div className="px-(--spacing-5) w-full gap-(--spacing-5) flex justify-between ">
        <p className="text-2xl not-italic font-semibold leading-8">Popular</p>

        <Button variant="outline" className="max-w-26 ">
          <div className="flex">
            <span className="text-sm not-italic font-medium leading-4">
              See more
            </span>
            <ChevronRight />
          </div>
        </Button>
      </div>
      
      <div className="px-(--spacing-5) py-(--spacing-8) w-full gap-(--spacing-5) grid grid-cols-2">
        {popularMovies.map((movie: MovieType) => {
          return (
            <Link href={`${movie.id}`} key={movie.id}>
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
            </div></Link>
          );
        })}
      </div>
    </div>
  );
};
