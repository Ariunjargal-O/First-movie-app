import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useCallback, useEffect, useState } from "react";
import { instance } from "@/axios-instance/utils/axios-instance";
import { ChangeEvent, SearchMovietype } from "@/constants/Type";
import { useParams, useSearchParams } from "next/navigation";
import { BASE_IMAGE_URL } from "@/constants";
import Link from "next/link";

export function SearchList({ res }: { res: SearchMovietype[] }) {
  return (
    <div className="rounded-3xl p-(--spacing-5) flex-col items-center bg-white border-[3px] border-[#E4E5E9]  mx-5 mt-3 absolute top-0 z-50">
      {res
        .map((resSearch: SearchMovietype) => {
          return (
            <div className="flex justify-between items-center relative pb-(--spacing-2) " 
            key={resSearch.id}>
              <div className="flex gap-3">
                <img
                  className="w-[67px] h-[100px] rounded-md"
                  src={`${BASE_IMAGE_URL}/w200${resSearch.poster_path}`}
                />
                <div className="flex flex-col w-full">
                  <div className="flex flex-col">
                    <p className="text-2xl not-italic font-semibold leading-5 pt-1 ">
                      {resSearch.title}
                    </p>
                    <div className="flex py-[6px]">
                      <img className="mr-2" src="/icon-star.png"/>
                      <p className="text-xs font-medium leading-4">
                        {resSearch.vote_average}
                      </p>{" "}
                      <p className="text-xs font-normal leading-4 text-(--text-text-muted-foreground)">
                        /10
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-[212px] mt-3">
                    <p className="text-xs font-medium leading-4">{resSearch.release_date}</p>
                   <Link href={`/movieDetails/${resSearch.id}`}>
                   <Button
                      variant="outline"
                      className="w-18 h-2  hover:bg-indigo-100 "
                    >
                      <div className="flex">
                        <span className="text-[10px] not-italic font-medium leading-4">
                          See more
                        </span>
                        <ChevronRight />
                      </div>
                    </Button></Link>
                  </div>
                </div>
              </div>
              <hr className="my-4 border-b-2 pb-(--spacing-5)"></hr>
            </div>
          );
        })
        .slice(0, 3)}
    </div>
  );
}
