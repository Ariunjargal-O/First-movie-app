"use client";
import { useEffect, useState } from "react";
import { UpcomingMovieList } from "../components/UpcomingMovieList";
import { TopRatedMovieList } from "../components/TopRatedMovieList";
import { PopularMovieList } from "../components/PopularMovieList";
import { MovieType } from "../constants/Type";
import { NowplayingMovieList } from "@/components/NowPlayingMovieList";

export default function Home() {
  const [movieList, setMovieList] = useState<MovieType[]>([]);

  return (
    <div>
      <div>
        <NowplayingMovieList
          setMovieList={setMovieList}
          movieList={movieList}
        />
        <UpcomingMovieList setMovieList={setMovieList} movieList={movieList} />
        <TopRatedMovieList setMovieList={setMovieList} movieList={movieList} />
        <PopularMovieList />
      </div>
    </div>
  );
}
