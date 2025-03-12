import { Dispatch, SetStateAction } from "react";
import { MovieType } from "../page";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
type MovieListPropsType = {
  setMovieList: Dispatch<SetStateAction<MovieType[]>>;
  movieList: MovieType[];
};

export const MainPage = (props: MovieListPropsType) => {
  return (

    
    <Carousel>
      <div className="flex">
      {props.movieList.map((movie: MovieType) => {
        return (
          <div>
            <div>
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <div className="p-(--spacing-5)">
                <div className="flex w-full justify-between gap-[2px]">
                  <div className="flex flex-col">
                    {" "}
                    <p className="text-[14px] not-italic font-normal leading-5">
                      Now playing:
                    </p>
                    <p className="text-2xl not-italic font-semibold leading-8 ">
                      {movie.title}
                    </p>
                  </div>
                  <div className="flex">
                    <img className="w-4 h-4" src="icon-star.png" />
                    <p className="text-3 font-medium leading-4">
                      {movie.vote_average}
                    </p>
                    <span className="text-3 font-normal leading-4 text-(--text-text-muted-foreground)">
                      /10
                    </span>
                  </div>
                </div>

                <p className="text-[14px] font-normal not-italic leading-5 py-4">
                  {}fdghvbjknlm;,'.'
                </p>

                <Button>
                  {" "}
                  <img src="icon-play.png" />
                  Watch Trailer
                </Button>
                <p className="text-white ">Watch Trailer</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </Carousel>
    
  );
};
