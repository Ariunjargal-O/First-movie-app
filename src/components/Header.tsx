"use client";

import { Button } from "@/components/ui/button";
import { GenresList } from "./GenresList";
import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { instance } from "@/axios-instance/utils/axios-instance";
import { SearchList } from "./SearchList";
import { useParams, useSearchParams } from "next/navigation";
import { useMediaQuery } from "react-responsive"
// function vs functional component

/* <div className={`${searchButton == "none" ? "hidden" : "block"}`}> */

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenreListVisible, setIsGenreListVisible] = useState(false);
  const [searchMovieResult, setSearchMovie] = useState([]);

  const handleSearch = () => {
    setIsOpen(!isOpen);
  };

  const handleGenre = () => {
    setIsGenreListVisible(!isGenreListVisible);
  };

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const params = useParams();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const getSearch = async () => {
    const searchMov = await instance.get(
      `/search/movie?query=${search || query}&language=en-US&page=${page}`
    );
    console.log(searchMov);
    setSearchMovie(searchMov.data.results);
  };
  useEffect(() => {
    if (query || search) getSearch();
  }, [query, search]);


  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
  return (
    <div>

      {isMobile&& (
        <div>
          {!isOpen && (
        <div className="flex justify-between items-center h-[59px] px-(--spacing-5) gap-2">
          <Link href={`/`}>
            {" "}
            <div className="flex">
              <img src="/icon-header-film.png" />
              <p className="text-[16px], text-indigo-700 italic ml-2 font-bold leading-[20px] tracking-[0.32px]">
                Movie Z
              </p>
            </div>
          </Link>
          <div className="flex gap-3">
            {!isOpen && (
              <Button
                onClick={handleSearch}
                className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100"
              >
                <img className="" src="/search.png" />
              </Button>
            )}

            <Button className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100">
              <img className="" src="/night-mode.png" />
            </Button>
          </div>
        </div>
      )}

      {isOpen && (
        <div>
          <div className="flex justify-between items-center h-[59px] px-(--spacing-5) gap-2 ">
            <Button
              className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100 "
              onClick={handleGenre}
            >
              <img className="" src="/icon-arrow-down.png" />
            </Button>
            <div className="w-[300px] flex bg-[#f5f5f5] h-auto gap-2 items-center p-2 rounded-sm  hover:outline-solid outline-zinc-300">
              <img className="w-5 h-5" src="/search.png" />
              <input
                className="min-h-5 w-[230px] bg-[#f5f5f5] p-[.15rem .5rem]  outline-none leading-[1.15px] "
                onChange={handleInputChange}
                type="search"
                placeholder=" Search ...     "
                value={query}
              />
            </div>
            <Button className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]  hover:bg-indigo-100">
              <img className="" src="/night-mode.png" />
            </Button>
          </div>{" "}
        </div>
      )}
      <div className="fixed z-50">{isGenreListVisible && <GenresList />}</div>
      {searchMovieResult.length > 0 && (
        <div  className="h-screen absolute z-50 w-screen">
          <SearchList res={searchMovieResult} />
        </div>
      )}
        </div>
      )}
      {!isMobile &&(
        <div>
          
        </div>
      )}
      
    </div>
  );
};
