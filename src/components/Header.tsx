"use client";

import { Button } from "@/components/ui/button";
import { GenresList } from "./GenresList";
import { useState } from "react";
import { Link } from "lucide-react";

// function vs functional component

/* <div className={`${searchButton == "none" ? "hidden" : "block"}`}> */

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenreListVisible, setIsGenreListVisible] = useState(false);

  const handleSearch = () => {
    setIsOpen(!isOpen);
  };

  const handleGenre = () => {
    setIsGenreListVisible(!isGenreListVisible);
  };

  return (
    <div>
      {!isOpen && (
        <div className="flex justify-between items-center h-[59px] px-(--spacing-5) ">
          <div className="flex">
            <img src="icon-header-film.png" />
            <p className="text-[16px], text-indigo-700 italic ml-2 font-bold leading-[20px] tracking-[0.32px]">
              Movie Z
            </p>
          </div>
          <div className="flex gap-3">
            {!isOpen && (
              <Button
                onClick={handleSearch}
                className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7] hover:bg-[#f4f4f4]"
              >
                <img className="" src="search.png" />
              </Button>
            )}

            <Button className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7] hover:bg-[#f4f4f4]">
              <img className="" src="night-mode.png" />
            </Button>
          </div>
        </div>
      )}

      {isOpen && (
        <div>
          <div className="flex justify-between items-center h-[59px] px-(--spacing-5) gap-2">
            <Button
              className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7] hover:bg-gray-300 "
              onClick={handleGenre}
            >
              <img className="" src="icon-arrow-down.png" />
            </Button>
            <div className="w-[300px] flex bg-[#f5f5f5] h-auto gap-2 items-center p-2 rounded-sm  hover:outline-solid outline-zinc-300">
              <img className="w-5 h-5" src="search.png" />
              <input
                className="min-h-5 w-[230px] bg-[#f5f5f5] p-[.15rem .5rem]  outline-none leading-[1.15px] "
                type="search"
                placeholder=" Search ...     "
              ></input>
            </div>
            <Button className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7] hover:bg-gray-300">
              <img className="" src="night-mode.png" />
            </Button>
          </div>{" "}
        </div>
      )}
      <div className="fixed z-50">{isGenreListVisible && <GenresList />}</div>
    </div>
  );
};
