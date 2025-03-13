"use client";
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { UpcomingMovieList } from "./components/UpcomingMovieList";
import { TopRatedMovieList } from "./components/TopRatedMovieList";
import { PopularMovieList } from "./components/PopularMovieList";
import { GenresList } from "./components/GenresList";
import { MovieType } from "./constants/Type";
import { Header } from "./components/Header";
import { NowplayingMovieList } from "./components/NowPlayingMovieList";

export default function Home() {
  const [movieList, setMovieList] = useState<MovieType[]>([]);

  return (
    <div>
      <Header></Header>
      <div>
        <NowplayingMovieList></NowplayingMovieList>

        {/* <GenresList/> */}

        <UpcomingMovieList
          // onChange = {(string) => setMovieList([...movielist])}
          setMovieList={setMovieList}
          movieList={movieList}
        />
        <TopRatedMovieList setMovieList={setMovieList} movieList={movieList} />
      </div>
      <PopularMovieList />

      <Footer></Footer>
    </div>
  );
}
