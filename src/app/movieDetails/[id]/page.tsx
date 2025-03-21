"use client";

import { useParams } from "next/navigation";
import { MovieDetailsMain } from "../MovieDetailsMain";
import { MovieDetailsCredit } from "../MovieDetailsCredit";
import { MoreLike } from "../MoreLike";
import { useState } from "react";
import { MovieDetailType } from "@/constants/Type";

const MovieDetailsPage = () => {
  const params = useParams();
  const movieId = params.id as string;
  
  return (
    <div>
      <MovieDetailsMain id={params.id} />
      <MovieDetailsCredit id={movieId} />
      <MoreLike />
    </div>
  );
};
export default MovieDetailsPage;