import { Dispatch, SetStateAction, useState } from "react";
import { MovieType } from "./constants/type";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type MovieListPropsType = {
  movieList: MovieType[];
};

import axios from 'axios';
import { ACCESS_TOKEN } from "../constants";
import { instance } from "../axios-instance/utils/axios-instance";



export const MovieGanList = () => {
  const [movieGenLists, setMoveiGanList]=useState([])


 


  return (
    <div>
      {props.movieList.map((movie: MovieType) => (
        <div className="flex justify-between items-center py-(--spacing-8)">
          <p className="text-2xl not-italic font-semibold leading-8">
            {movie.original_language}
          </p>

          <Button variant="outline">
            <div className="flex">
              <span className="text-sm not-italic font-medium leading-4">
                See more
              </span>
              <ChevronRight />
            </div>
          </Button>
        </div>
      ))}
    </div>
  );
};
