import { Button } from "@/components/ui/button";
import { GenresList } from "./GenresList";

const searchBtn = () => {
  return (
    <div className="flex justify-between items-center h-[59px] px-(--spacing-5)">
      <Button className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7] " onClick={genreBtn}>
        <img className="" src="icon-arrow-down.png" />
      </Button>
      <div className="w-[300px] flex bg-[#f5f5f5] h-auto gap-2 items-center p-2 rounded-sm ml-2">
        <img className="w-5 h-5" src="search.png" />
        <input
          className="min-h-5 w-[290px] bg-[#f5f5f5] p-[.15rem .5rem]  outline-none leading-[1.15] shadow-[0px 10px 20px -18px] hover:outline-[1px solid lightgrey] focus:bt-[20px solid #1820ed] focus:rounded-[4px 4px 2px 2px]"
          type="search"
          placeholder="Search ..."
        ></input>
      </div>
    </div>
  );
};


const genreBtn = () => {
  return(  <GenresList />)
}

export const Header = () => {
  return (
    <div>
     

      <div className="flex justify-between items-center h-[59px] px-(--spacing-5)">
        <div className="flex">
          <img src="icon-header-film.png" />
          <p className="text-[16px], text-indigo-700 italic ml-2 font-bold leading-[20px] tracking-[0.32px]">
            Movie Z
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex justify">
            <Button className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7] hover:bg-[#f4f4f4]">
              <img className="" src="search.png" />
            </Button>
            <div>
              <input className="w-0 h-0" type="search"></input>
            </div>
          </div>
          <div>
            <Button className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7] hover:bg-[#f4f4f4]" onClick={searchBtn}>
              <img className="" src="night-mode.png" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
