import { instance } from "@/axios-instance/utils/axios-instance";
import { useParams } from "next/navigation";
import { useState } from "react";









const TrailerPage = () => {
const params = useParams()
const [trailer, setTrailer] = useState()

const getMovieTrailer = async () => {
    const movieTrailer = await instance.get(`/movie/${movie.id}/videos?language=en-UÒ`)
    console.log(movieTrailer)
}


    return(
        <div></div>
    )
}
export default TrailerPage;