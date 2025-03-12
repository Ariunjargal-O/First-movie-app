import { Dispatch, SetStateAction } from "react";
import { MovieType } from "../page";
import { MovieGanList } from "./MovieGanList";

type MovieListPropsType = {
  setMovieList: Dispatch<SetStateAction<MovieType[]>>;
  movieList: MovieType[];
};
export const MovieList = (props: MovieListPropsType) => {
  return (
    <div className="px-(--spacing-5) py-(--spacing-8) w-full gap-(--spacing-5) grid grid-cols-2">
      {/* <MovieGanList movieList={props.movieList}
    /> */}

      {props.movieList.map((movie: MovieType) => {
        return (
          <div key={movie.title}>
            <div>
              <div className="flex flex-col">
                
                  <img
                    className="w-[157px] h-auto rounded-t-lg "
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  />

                  <div className="p-(--spacing-2) bg-[#F4F4F5] gap-1 rounded-b-lg ">
                    <div className="flex gap-1 items-center">
                      <img className="w-4 h-4" src="icon-star.png" />
                      <p className="text-xs font-medium leading-4">
                        {movie.vote_average}
                      </p>
                      <span className="text-xs font-normal leading-4 text-(--text-text-muted-foreground)">
                        /10
                      </span>
                    </div>
                    <h1 className=" text-[14px] font-normal leading-5 not-italic text-ellipsis h-10 pt-1">
                      {movie.title}
                    </h1>
                  </div>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
