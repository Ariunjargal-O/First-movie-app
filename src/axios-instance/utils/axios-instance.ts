import axios from "axios";
import { ACCESS_TOKEN, BASE_URL } from "@/constants";


export const instance = axios.create({
    baseURL:BASE_URL,
      headers: {
        Authorization:
          `Bearer ${ACCESS_TOKEN}`,
      },
}
)