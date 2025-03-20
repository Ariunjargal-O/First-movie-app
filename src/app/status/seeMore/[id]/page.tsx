'use client'
import { instance } from "@/axios-instance/utils/axios-instance";
import { Button } from "@/components/ui/button";
import {
  MovieDetailCreditType,
  MovieDetailType,
  MovieType,
} from "@/constants/Type";
import { ChevronRight, Key } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const MoreLikePage = () => {
  const params = useParams();
  const [moreLikeList, setMoreLikeList] = useState<MovieDetailType[]>();
  console.log(params)
  const getMoreLikeMovieList = async () => {
    const moreLikeMovieList = await instance.get(
      `/movie/${params.id}/similar?language=en-US&page=1`
    );
    // console.log(moreLikeMovieList);
 
    setMoreLikeList(moreLikeMovieList.data.results);
  };

  useEffect(() => {
    getMoreLikeMovieList();
  }, []);

  return (
    
    <div>
<div>
        <div>
          <div className="px-(--spacing-5) pt-8 w-full gap-(--spacing-5) flex justify-between ">
            <p className="text-2xl not-italic font-semibold leading-8">
              More like this
            </p>

            <Button variant="outline" className="max-w-26 ">
              <div className="flex">
                <span className="text-sm not-italic font-medium leading-4">
                  See more
                </span>
                <ChevronRight />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="px-(--spacing-5) py-(--spacing-8) w-full gap-(--spacing-5) grid grid-cols-2">
        {moreLikeList?.map((movie: MovieDetailType) => {
          return (
            <Link href={`/movieDetails/${movie.id}`} key={movie.id}>
              <div className="bg-[#F4F4F5] rounded-b-lg" key={movie.id}>
                <div className="flex flex-col">
                  <img
                    className="w-[157px] h-auto rounded-t-lg "
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  />

                  <div className="p-(--spacing-2) gap-1  ">
                    <div className="flex gap-1 items-center">
                      <img className="w-4 h-4" src="/icon-star.png" />
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
      </div>
    </div>
  );
};
export default MoreLikePage;

