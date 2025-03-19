"use client";
import { instance } from "@/axios-instance/utils/axios-instance";
import { MovieTrailerType, MovieType } from "@/constants/Type";
import { Fullscreen } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const TrailerPage = (video: MovieTrailerType) => {
  const params = useParams();
  const [trailer, setTrailer] = useState<MovieTrailerType[]>([]);

  const getMovieTrailer = async () => {
    const movieTrailer = await instance.get(
      `/movie/${params.id}/videos?language=en-UÒ`
    );
    // console.log(movieTrailer);
    setTrailer(movieTrailer.data.results.slice(0, 1));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      {/* <YouTube videoId={trailer[0].key} opts={opts} onReady={onPlayerReady} /> */}
      <YouTube videoId={trailer[0]?.key} opts={opts} onReady={onPlayerReady} />
      {/* {trailer.map((video: MovieTrailerType) => {
        return (
          <div>
            
          </div>
        );
      })} */}
    </div>
  );
};
export default TrailerPage;
