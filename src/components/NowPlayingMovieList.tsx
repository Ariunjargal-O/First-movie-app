"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { instance } from "../axios-instance/utils/axios-instance";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { MovieTrailerType, MovieType } from "../constants/Type";
import { Button } from "../components/ui/button";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BASE_YOUTUBE_URL } from "@/constants";
type MovieListPropsType = {
  setMovieList: Dispatch<SetStateAction<MovieType[]>>;
  movieList: MovieType[];
};

export const NowplayingMovieList = (props: MovieListPropsType) => {
  const [nowPlaying, setNowPlayingMovie] = useState<MovieType[]>([]);
  const [trailer, setTrailer] = useState<MovieTrailerType[]>([]);

  // const options = {
  //   method: 'GET',
  //   url: 'https://api.themoviedb.org/3/movie/now_playing',
  //   params: {language: 'en-US', page: '1'},
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmFlZjQwNDEzODJiOWVjMWYzOGNhYWJmMTU3NjYyMyIsIm5iZiI6MTc0MTU3OTQ3Mi4zNTY5OTk5LCJzdWIiOiI2N2NlNjRkMDU5YWUwM2VmZTMyYWE5ZTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JaSdOfIvK_7c048Nv1v_7KpiphyE5h65KzRmJviVonY'
  //   }
  // };
  
  const getNowPlayingMovieList = async () => {
    const nowplayingMovieList = await instance.get("/movie/now_playing");
    // console.log(nowplayingMovieList);
    setNowPlayingMovie(nowplayingMovieList.data.results);
  };

  useEffect(() => {
    getNowPlayingMovieList();
  }, []);


  
    // const getMovieTrailer = async () => {
    //   const movieTrailer = await instance.get(`/movie/${mapres}/videos?language=en-UÒ`);
    //   // console.log(movieTrailer);
    //   setTrailer(movieTrailer.data.results);
    // };
  
    // useEffect(() => {
    //   getMovieTrailer();
    // }, []);
    
  
    // const officialTrailer = trailer.find(
    //   (res) => res.type === "Trailer" && "Teaser" || res.name === "Official Trailer"
    // );

    // const mapres = nowPlaying.map((movie: MovieType) => (movie.id))
    // console.log()
  return (
    <div className="h-fit mb-4">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {nowPlaying.map((movie: MovieType) => {
            return (
              <CarouselItem key={movie.id}>
                <div>
                  <div className="flex flex-col w-auto ">
                    <Link href={`/movieDetails/${movie.id}`}>
                      <img
                        className="w-full"
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      />
                      <div className="px-(--spacing-5) pt-(--spacing-5) flex flex-wrap justify-evenly">
                        <div className="flex w-full justify-between gap-[2px]">
                          <div className="flex flex-col">
                            {" "}
                            <p className="text-[14px] not-italic font-normal leading-8">
                              Now playing:
                            </p>
                            <p className="text-2xl not-italic font-semibold leading-5 ">
                              {movie.title}
                            </p>
                          </div>
                          <div className="flex">
                            <img className="w-4 h-4" src="/icon-star.png" />
                            <p className="text-3 font-medium leading-4">
                              {movie.vote_average}
                            </p>
                            <span className="text-3 font-normal leading-4 text-(--text-text-muted-foreground)">
                              /10
                            </span>
                          </div>
                        </div>

                        <p className="text-[14px] font-normal not-italic leading-5 mt-4 text-ellipsis line-clamp-3 max-h-30">
                          {movie.overview}
                        </p>
                      </div>
                    </Link>
                   <div className="px-(--spacing-5)">
                   {/* <Link href={`/trailer/${movie.id}`}> */}
                      {" "}
                      <Button className="mt-4">
                        {" "}
                        <img src="/icon-play.png" />
                        Watch Trailer
                      </Button>
                    {/* </Link> */}
                   </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
