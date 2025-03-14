

import { instance } from '@/axios-instance/utils/axios-instance';
import { MovieDetailsCreditType } from '@/constants/Type';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/credit/credit_id',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmFlZjQwNDEzODJiOWVjMWYzOGNhYWJmMTU3NjYyMyIsIm5iZiI6MTc0MTU3OTQ3Mi4zNTY5OTk5LCJzdWIiOiI2N2NlNjRkMDU5YWUwM2VmZTMyYWE5ZTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JaSdOfIvK_7c048Nv1v_7KpiphyE5h65KzRmJviVonY'
//   }
// };



export const MovieDetailsCredit = () => {

    const [movieCredit, setmovieCredit] = useState<MovieDetailsCreditType>()
  
      const params = useParams();

    const getMovieDetailsCredit = async () => {
const credit = await instance.get(`${params.id}/credit/credit_id'`) 
console.log(credit)
setmovieCredit(movieCredit)
    }

    useEffect(()=>{
      getMovieDetailsCredit()
    },[])

    return(<div>
        <div className="flex flex-col px-(--spacing-5) pt-(--spacing-5) pb-(--spacing-8)">
        <div className="flex justify-between ">
          <p className="text-[16px] not-italic font-bold leading-7">Director</p>
          <p className="text-[16px] not-italic font-normal leading-4">
            Title:
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
    </div>)
}