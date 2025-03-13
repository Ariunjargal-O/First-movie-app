import axios from "axios";
import { useEffect, useState } from "react";
import { instance } from "../axios-instance/utils/axios-instance";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { MovieType } from "../constants/Type";
import { Button } from "@/components/ui/button";

export const NowplayingMovieList = () => {
  const [nowPlaying, setNowPlayingMovie] = useState([]);

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
    console.log(nowplayingMovieList);
    setNowPlayingMovie(nowPlaying);
  };

  useEffect(() => {
    getNowPlayingMovieList();
  }, []);

  return (
    <div>
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
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
