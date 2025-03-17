"use client";
import { Dispatch, SetStateAction } from "react";

// import { MovieGanList } from "..components/MovieGenList";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronRight, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ACCESS_TOKEN } from "@/constants";
import { MovieDetailsType } from "@/constants/Type";
import { useParams } from "next/navigation";
import { instance } from "@/axios-instance/utils/axios-instance";

type MovieListPropsType = {
  setMovieList: Dispatch<SetStateAction<MovieDetailsType[]>>;
  movieList: MovieDetailsType[];
};

type Props = {
  id: string | undefined | string[];
};

export const MovieDetailsMain = (props: MovieListPropsType) => {
  const [openMovieDetail, setopenMovieDetail] = useState<MovieDetailsType>();
  const params = useParams();
  // console.log(params.id);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/movie_id",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: "Bearer ",
    },
  };

  const getMovieDetail = async () => {
    const movieDetail = await instance.get(`movie/${params.id}?language=en-US`);
    // console.log(movieDetail.data);
    setopenMovieDetail(movieDetail.data);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <div>
      <div className="flex justify-between pt-8 px-(--spacing-5) pb-(--spacing-4)">
        <div>
          <p className="text-2xl not-italic font-semibold leading-8 ">
            {openMovieDetail?.title}
          </p>
          <p className="text-[14px] not-italic font-normal leading-5">
            {openMovieDetail?.release_date}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-7 h-7" src="icon-star.png" />
          <div className="flex flex-col text-center">
            <div className="flex">
              <p className="text-3 font-medium leading-4">
                {openMovieDetail?.vote_average}
              </p>
              <span className="text-3 font-normal leading-4 text-(--text-text-muted-foreground)">
                /10
              </span>
            </div>
            <p className="text-3 font-medium leading-4 text-(--text-text-muted-foreground)">
              {openMovieDetail?.vote_count}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mb-(--spacing-8)">
        <img
          className="w-screen relative"
          src={`https://image.tmdb.org/t/p/original/${openMovieDetail?.backdrop_path}`}
        ></img>
        <div className=" absolute flex justify-between bottom-3 left-3 gap-3 items-center">

            <Button  className="bg-white border-[1px] border-black rounded-full hover:bg-indigo-400 w-20">
              <img className="w-6 h-6" src="icon-black-play.png"></img>
            </Button>
          <p className="text-[16px] not-italic font-normal leading-6 text-white">
            Play Trailer
          </p>
          <p className="text-[16px] not-italic font-normal leading-6 text-white">
            1223
          </p>
        </div>
      </div>

      <div className="flex gap-8 px-(--spacing-5)">
        <img
          className="w-[100px] h-[179px]"
          src={`https://image.tmdb.org/t/p/original/${openMovieDetail?.poster_path}`}
        />
        <div>
          <div className="flex flex-wrap">
            {openMovieDetail?.genres.map((g) => (
              <div key={g.id} className="">
                <Button className="bg-white border-[#E4E4E7] border-1 rounded-4xl text-black font-semibold leading-4 text-[16px] m-1">
                  {g.name}
                </Button>
              </div>
            ))}
          </div>
          <p className="text-[16px] not-italic font-normal leading-6 pt-5">
            {openMovieDetail?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};
