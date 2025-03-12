
import { Dispatch, SetStateAction, useState } from "react";
import { MovieType } from "../page";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";



type MovieListPropsType = {
    setMovieList: Dispatch<SetStateAction<MovieType[]>>;
    movieList: MovieType[];
  };



// export const MovieGanList = (props: MovieListPropsType) => {

//   const [movieGanList, setMoveiGanList]=useState([])
// return(<div>
//     {movieList.map((movie: MovieType) => {
//         <div className="flex justify-between items-center py-(--spacing-8)">
//         <p className="text-2xl not-italic font-semibold leading-8">
//           {movie.backdrop_path}
//         </p>

//         <Button variant="outline">
//           <div className="flex">
//             <span className="text-sm not-italic font-medium leading-4">
//               See more
//             </span>
//             <ChevronRight />
//           </div>
//         </Button>
//       </div>
//     })}
    
        
// </div>
// )
// } 