"use client";

import { useParams } from "next/navigation";
import { MovieDetailsMain } from "../MovieDetailsMain";
import { MovieDetailsCredit } from "../MovieDetailsCredit";
import { MoreLike } from "../MoreLike";
import { useState } from "react";
import { MovieDetailType } from "@/constants/Type";



const MovieDetailsPage = () => {
  
  const params = useParams();
  // console.log(params.id);

  // type Props = {
  //   id: string | undefined | string[];
  // };
  const movieId = params.id as string; 
  const [movieList, setMovieList] = useState<MovieDetailType[]>([]);
  return (
    <div>
      <MovieDetailsMain id={movieId}
      movieList={movieList}
      setMovieList={setMovieList}/>
      <MovieDetailsCredit id={movieId} />
      <MoreLike />
    </div>
  );
};

export default MovieDetailsPage;
