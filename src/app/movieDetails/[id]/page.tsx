"use client";

import { useParams } from "next/navigation";
import { MovieDetailsMain } from "../MovieDetailsMain";
import { MovieDetailsCredit } from "../MovieDetailsCredit";
import { MoreLike } from "../MoreLike";



const MovieDetailsPage = () => {
  
  const params = useParams();
  // console.log(params.id);
  type Props = {
    id: string | undefined | string[];
  };


  return (
    <div>
      <MovieDetailsMain id={params.id}/>
      <MovieDetailsCredit id={params.id} />
      <MoreLike />
    </div>
  );
};

export default MovieDetailsPage;
