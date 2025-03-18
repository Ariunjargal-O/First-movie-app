"use client";
import { instance } from "@/axios-instance/utils/axios-instance";
import { MovieType } from "@/constants/Type";
import { Link } from "lucide-react";
import { useEffect, useState } from "react";

const UpcomingListPage = () => {
  const [upComingMovieList, setUpcomingMovieList] = useState<MovieType[]>([]);

  const getUpComingMovie = async () => {
    const upComingMovie = await instance.get(
      `/movie/upcoming?language=en-US&page=1`
    );
    // console.log(upComingMovie);
    setUpcomingMovieList(upComingMovie.data.results);
  };

  useEffect(() => {
    getUpComingMovie();
  }, []);

  return (
    <div>
      <p className="px-(--spacing-5)  w-full gap-(--spacing-5) flex justify-between text-2xl not-italic font-semibold leading-8">
        Upcoming

      </p>
      <div className="min px-(--spacing-5) py-(--spacing-8) w-full gap-(--spacing-5) grid grid-cols-2 ">
        {upComingMovieList.map((movie: MovieType) => {
          return (
            <div key={movie.id}>
              {/* <Link href={`/movieDetails/id${movie.id}`}> */}
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
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingListPage;
