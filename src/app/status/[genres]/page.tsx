"use client";

import { instance } from "@/axios-instance/utils/axios-instance";
import { Button } from "@/components/ui/button";
import { GenresListType, MovieType } from "@/constants/Type";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type MovieListPropsType = {
  setMovieList: Dispatch<SetStateAction<MovieType[]>>;
  movieList: MovieType[];
};
const GenresPage = () => {
  const [genresList, setGenresPage] = useState<GenresListType[]>([]);
const [pageNumber, setPageNumber] = useState<number>(1)
  const params = useParams();
//   console.log(params.genres)

//   const getGenresList = async () => {
//       const genres = await instance.get("/genre/movie/list");
//     //   console.log(genres);
//       setGenresPage(genres.data.genres);
//     };

//     useEffect(() => {
//       getGenresList();
//     },[]);

  const [genresMovieList, setGenresMovieList] = useState<GenresListType[]>([]);

  const getGenresMovie = async () => {
    const genresMovie = await instance.get(
      `/discover/movie?language=en&with_genres=${params.genres}&page=${"1"}`
    );
    console.log(genresMovie);
    setGenresMovieList(genresMovie.data.results)
  };
  useEffect(() => {
    getGenresMovie();
  }, []);





  return (
    <div>
     <div>
             
           
    <p>asdvf</p>


            <Button>1</Button>



          

         
    
      </div>

    </div>
  );
};

export default GenresPage;

{
  /* <div className="px-(--spacing-5) w-full gap-(--spacing-5) flex justify-between ">
    {genresList.map((g) => )}
  <p className="text-2xl not-italic font-semibold leading-8">{}</p>
</div> */
}

{
  /* <div className="px-(--spacing-5) py-(--spacing-8) w-full gap-(--spacing-5) grid grid-cols-2">
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
        </div>
      </Link>
    );
  })}
</div> */
}
