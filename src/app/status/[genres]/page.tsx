"use client";

import { instance } from "@/axios-instance/utils/axios-instance";
import { Button } from "@/components/ui/button";
import { BASE_IMAGE_URL } from "@/constants";
import { GenresListType, MovieType } from "@/constants/Type";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type MovieListPropsType = {
  setMovieList: Dispatch<SetStateAction<MovieType[]>>;
  movieList: MovieType[];
};
const GenresPage = () => {
  // const [genresList, setGenresPage] = useState<GenresListType[]>([]);
  const [page, setPageNumber] = useState<number>(1);
  const params = useParams();
const searchParams = useSearchParams()
const genreName = searchParams.get('name')

  // console.log(params.genres)

  // const getGenresList = async () => {
  //     const genres = await instance.get("/genre/movie/list");
  //   //   console.log(genres);
  //     setGenresPage(genres.data.genres);
  //   };

  //   useEffect(() => {
  //     getGenresList();
  //   },[]);

  const [genresMovieList, setGenresMovieList] = useState([]);

  const getGenresMovie = async () => {
    const genresMovie = await instance.get(
      `/discover/movie?language=en&with_genres=${params.genres}&page=${page}`
    );
    console.log(params.genres);
    console.log(genresMovie);
    setGenresMovieList(genresMovie.data.results);
  };

  useEffect(() => {
    getGenresMovie();
  }, []);

  return (
    <div>
      <p className="px-(--spacing-5)  w-full gap-(--spacing-5) flex justify-between text-2xl not-italic font-semibold leading-8">
        {params.id}

      </p>
      <div className="min px-(--spacing-5) py-(--spacing-8) w-full gap-(--spacing-5) grid grid-cols-2 ">
        
        {genresMovieList.map((movie: MovieType) => {
          return (
            <div key={movie.id}>
              <Link href={`/movieDetails/${movie.id}`}>
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
              </Link>
            </div>
          );
        })}

        <Button>1</Button>
      </div>
    </div>
  );
};

export default GenresPage;
