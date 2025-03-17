"use client";

import { useParams } from "next/navigation";
import { MovieDetailsMain } from "../movieDetails/MovieDetailsMain";
import { MovieDetailsCredit } from "../movieDetails/MovieDetailsCredit";
import { MoreLike } from "../movieDetails/MoreLike";


// type MovieListPropsType = {
//   setMovieList: Dispatch<SetStateAction<MovieType[]>>;
//   movieList: MovieType[];
// };
// type MovieDetailsType = {
//   setMo
// }

const MovieDetailsPage = () => {
  
  const params = useParams();
  // console.log(params.id);



  return (
    <div>
      <MovieDetailsMain id={params.id}/>
      <MovieDetailsCredit id={params.id} />
      <MoreLike />
    </div>
  );
};

export default MovieDetailsPage;
