export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; // --> ni static type bichiglel. Array<number> gj bichvel generic type bichiglel
  id: number;
  original_language: string;
  orignal_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};


export type GenresListType = {
    id:number;
    name:string;
}