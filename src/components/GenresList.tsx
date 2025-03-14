import { Button } from "@/components/ui/button";
import { ACCESS_TOKEN } from "../constants";
import { instance } from "../axios-instance/utils/axios-instance";
import { useEffect, useState } from "react";
import { GenresListType } from "../constants/Type"; 

export const GenresList = () => {
  const [genresLists, setGenresList] = useState<GenresListType[]>([]);

  // const options = {
  //   method: "GET",
  //   url: "https://api.themoviedb.org/3/genre/movie/list",
  //   params: { language: "en-US", page: "1" },
  //   headers: {
  //     accept: "application/json",
  //     Authorization: `Bearer ${ACCESS_TOKEN}`,
  //   },
  // };

  const getGenresList = async () => {
    const genresList = await instance.get("/genre/movie/list");
    // console.log(genresList);
    setGenresList(genresList.data.genres);
  };

  useEffect(() => {
    getGenresList();
  },[]);

  return (
    <div className="w-[335px] h-auto p-(--spacing-5) flex-col items-center bg-white border-[3px] border-[#E4E5E9] rounded-2xl mx-5 mt-3 ">
      <div>
        {" "}
        <p className="text-2xl font-semibold not-italic leading-8 pb-1">
          Genres
        </p>
        <p className="text-base not-italic font-normal leading-6">
          See lists of movies by genre
        </p>
      </div>
      <hr className="my-4 border-t-2"></hr>
      <div className="flex flex-wrap gap-3">
      {genresLists.map((genres: GenresListType) => {
        return (
          <div key={`${genres.name}${genres.id}`}>
            <div>
            <Button className="bg-white border-[#E4E4E7] border-1 rounded-4xl text-black">
              {genres.name}
              <img className="w-3 h-3" src="icon-arrow-right.png" />
            </Button>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
