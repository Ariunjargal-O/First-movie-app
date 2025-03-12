import { Button } from "@/components/ui/button"


export const Header = () => {




  return (
    <div className="flex justify-between items-center h-[59px] px-(--spacing-5)">
      <div className="flex">
        <img src="icon-header-film.png" />
        <p className="text-[16px], text-indigo-700 italic ml-2 font-bold leading-[20px] tracking-[0.32px]">
          Movie Z
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex justify">
          
          <Button className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]">
          <img className="" src="search.png" />
          </Button>
          <div>
            <input className="w-0 h-0" type="search"></input>
          </div>
        </div>
        <div>
        <Button className=" bg-white w-8 h-8 p-2 border rounded-lg border-solid border-[#E4E4E7]">
          <img className="" src="night-mode.png" />
          </Button>
        </div>
      </div>
    </div>
  );
};
