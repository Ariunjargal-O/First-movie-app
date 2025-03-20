"use client";
import { instance } from "@/axios-instance/utils/axios-instance";
import { BASE_YOUTUBE_URL } from "@/constants";
import { MovieTrailerType, MovieType } from "@/constants/Type";
import { Fullscreen } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

type Props = {
  type: string | undefined | string[];
};

const TrailerPage = (props: Props) => {
  const params = useParams();
  const [trailer, setTrailer] = useState<MovieTrailerType[]>([]);

  const getMovieTrailer = async () => {
    const movieTrailer = await instance.get(
      `/movie/${params.id}/videos?language=en-UÒ`
    );
    // console.log(movieTrailer);
    setTrailer(movieTrailer.data.results);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
  

  const officialTrailer = trailer.find(
    (res) => res.name === "Official Trailer"
  );

  return (
    
     <Link href={`${BASE_YOUTUBE_URL}${officialTrailer?.key}`}></Link>
   
  );
};
export default TrailerPage;
