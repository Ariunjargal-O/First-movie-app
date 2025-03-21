"use client";
import {useEffect, useState } from "react";
import Link from "next/link";
import { MovieType } from "@/constants/Type";
import { instance } from "@/axios-instance/utils/axios-instance";
import { BASE_IMAGE_URL } from "@/constants";




export default function TopRatedListPage()  {
  const [topRatedMovies, setTopRatedMovieList] = useState<MovieType[]>([]);

  const getTopRatedMovieList = async () => {
    const topRatedMovieList = await instance.get(`/movie/top_rated`);
    setTopRatedMovieList(topRatedMovieList.data.results);
  };

  useEffect(() => {
    getTopRatedMovieList();
  }, []);

  return (
    <div>
      <div className="px-(--spacing-5) w-full gap-(--spacing-5) flex justify-between ">
        <p className="text-2xl not-italic font-semibold leading-8">Top Rated</p>
      </div>
      <div className="px-(--spacing-5) py-(--spacing-8) w-full gap-(--spacing-5) grid grid-cols-2">
        {topRatedMovies.map((movie: MovieType) => {
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
                    <img className="w-4 h-4" src="/icon-star.png" />
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


