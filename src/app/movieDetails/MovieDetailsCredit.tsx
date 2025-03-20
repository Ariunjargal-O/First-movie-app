import { instance } from "@/axios-instance/utils/axios-instance";
import { MovieDetailCreditType } from "@/constants/Type";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  id: string | undefined | string[];
};

export const MovieDetailsCredit = (props: Props) => {
  const [movieCredit, setmovieCredit] = useState<MovieDetailCreditType[]>();
  const [movieCreditCrew, setMovieCreditCrew] =
    useState<MovieDetailCreditType[]>();
  const params = useParams();

  const getMovieDetailsCredit = async () => {
    const credit = await instance.get(
      `/movie/${props.id}/credits?language=en-UÒ`
    );
    // console.log(credit);
    setmovieCredit(credit.data.cast);
    setMovieCreditCrew(credit.data.crew);
  };

  useEffect(() => {
    getMovieDetailsCredit();
  }, []);

  return (
    <div>
      <div className="flex flex-col px-(--spacing-5) pt-(--spacing-5) pb-(--spacing-8)">
        <div className="flex justify-between items-center  ">
          <p className="text-[16px] not-italic font-bold leading-7">Director</p>
          <p className="text-[16px] not-italic font-normal leading-4">
            {
              movieCredit?.find(
                (cast) => cast.known_for_department === "Directing"
              )?.name
            }
          </p>
        </div>

        <hr className="my-4 border-t-2 pb-(--spacing-5)"></hr>
        <div className="flex justify-between items-center ">
          <p className="text-[16px] not-italic font-bold leading-7">Writers</p>
          <p className="text-[16px] not-italic font-normal leading-4">
            {
              movieCreditCrew?.find((crew) => crew.known_for_department === "")
                ?.name
            }
          </p>
        </div>
        <hr className="my-4 border-t-2 pb-(--spacing-5)"></hr>
        <div className="flex justify-between items-center ">
          <p className="text-[16px] not-italic font-bold leading-7">Stars</p>
          <p className="text-[16px] not-italic font-normal leading-4 flex ">
            {/* {movieCredit?.map(
              (cast) => cast.known_for_department === "Acting" && cast.name
            ).slice(0, 3)} */}
            {
              movieCredit?.find(
                (cast) => cast.known_for_department === "Acting"
              )?.name
            }
          </p>
        </div>
        <hr className="my-4 border-t-2"></hr>
      </div>
    </div>
  );
};
