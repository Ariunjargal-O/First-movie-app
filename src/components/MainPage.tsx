"use client"
import { Dispatch, SetStateAction } from "react";
import { MovieDetailType, MovieType } from "../constants/Type";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import axios from 'axios';

type Proptype = {
  plugins?: EmblaPluginType[];
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { instance } from "../axios-instance/utils/axios-instance";
import Link from "next/link";

type MovieType = {
  setMovieList: Dispatch<SetStateAction<MovieType[]>>;
  movieList: MovieType[];
};

type MovieListPropsType = {  setMovieList: Dispatch<SetStateAction<MovieType[]>>;  movieList: MovieType[];};





export const UpcomingMovieList = (props:MovieListPropsType) => {
 
  const [mainPageMoveis, setMainPageMovie] = React.useState([])


  // const options = {
  //   method: 'GET',
  //   url: 'https://api.themoviedb.org/3/movie/now_playing',
  //   params: {language: 'en-US', page: '1'},
  //   headers: {accept: 'application/json'}
  // };
  
const getMainPageMovieList = async () => {
  const nowplaying = await instance.get("/movie/now_playing")
  console.log(nowplaying)
  setMainPageMovie(mainPageMoveis)
}

React.useEffect(() => {
  getMainPageMovieList()
},[])

  return (
    <div>
      <Carousel
      opts={{loop:true}}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {props.movieList.map((movie: MovieType) => {
            return (
            <Link >
            
            <CarouselItem key={movie.id}>
                <div>
                  <div className="flex flex-col w-auto">
                    <img
                      className="w-full"
                      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
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
                        {movie.overview}
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
              </CarouselItem>
            </Link>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
