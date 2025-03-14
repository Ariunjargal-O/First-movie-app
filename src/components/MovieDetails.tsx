import { Button } from "@/components/ui/button";
import { NowplayingMovieList } from "./NowPlayingMovieList";
import { ChevronRight } from "lucide-react";

export const MovieDetails = () => {
  return (
    <div>
      <div className="flex justify-between pt-8 px-(--spacing-5) pb-(--spacing-4)">
        <div>
          <p className="text-2xl not-italic font-semibold leading-8 ">
            {}asdfghj
          </p>
          <p className="text-[14px] not-italic font-normal leading-5">
            {}sadfg
          </p>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-7 h-7" src="icon-star.png" />
          <div className="flex flex-col text-center">
            <div className="flex">
              <p className="text-3 font-medium leading-4">{}567</p>
              <span className="text-3 font-normal leading-4 text-(--text-text-muted-foreground)">
                /10
              </span>
            </div>
            <p className="text-3 font-medium leading-4 text-(--text-text-muted-foreground)">
              12
            </p>
          </div>
        </div>
      </div>

      <div className="relative mb-(--spacing-8)">
        <img className="w-screen relative" src="icon-star.png"></img>
        <div className=" absolute flex justify-between bottom-3 left-3 gap-3">
          <Button className="bg-white border-[1px] border-black rounded-full hover:bg-indigo-400 w-20">
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
        <img className="w-[100px] h-[179px]" src="icon-black-play.png" />
        <div>
          <div>
            <Button className="bg-white border-[#E4E4E7] border-1 rounded-4xl text-black font-semibold leading-4 text-[16px]">
              {}fghjk
            </Button>
          </div>
          <p className="text-[16px] not-italic font-normal leading-6 pt-5">
            sadfghnadszfxghj
          </p>
        </div>
      </div>

      <div className="flex flex-col px-(--spacing-5) pt-(--spacing-5) pb-(--spacing-8)">
        <div className="flex justify-between ">
          <p className="text-[16px] not-italic font-bold leading-7">Director</p>
          <p className="text-[16px] not-italic font-normal leading-4">
            hjkml{}
          </p>
        </div>
        <hr className="my-4 border-t-2 pb-(--spacing-5)"></hr>
        <div className="flex justify-between">
          <p className="text-[16px] not-italic font-bold leading-7">Writers</p>
          <p className="text-[16px] not-italic font-normal leading-4">sdfg{}</p>
        </div>
        <hr className="my-4 border-t-2 pb-(--spacing-5)"></hr>
        <div className="flex justify-between ">
          <p className="text-[16px] not-italic font-bold leading-7">Stars</p>
          <p className="text-[16px] not-italic font-normal leading-4">
            awdesfgb{}
          </p>
        </div>
        <hr className="my-4 border-t-2"></hr>
      </div>

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
      <div className="px-(--spacing-5) py-(--spacing-8) w-full gap-(--spacing-5) grid grid-cols-2">
        {/* {upcomingMovies.map((movie: MovieType) => {
          return ( */}
            <div className="bg-[#F4F4F5] rounded-b-lg">
              <div className="flex flex-col">
                <img
                  className="w-[157px] h-auto rounded-t-lg "
                //   src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                />

                <div className="p-(--spacing-2) gap-1  ">
                  <div className="flex gap-1 items-center">
                    <img className="w-4 h-4" src="icon-star.png" />
                    <p className="text-xs font-medium leading-4">
                      {}
                    </p>
                    <span className="text-xs font-normal leading-4 text-(--text-text-muted-foreground)">
                      /10
                    </span>
                  </div>
                  <h1 className=" text-[14px] font-normal leading-5 not-italic text-ellipsis  pt-1">
                    {}
                  </h1>
                </div>
              </div>
            </div>
          {/* );
        })} */}
      </div>
    </div>
      </div>
    </div>
  );
};
