export const Header = () => {




  return (
    <div className="flex justify-between items-center h-[59px]">
      <div className="flex">
        <img src="icon-header-film.png" />
        <p className="text-[16px], text-indigo-700 italic ml-2 font-bold leading-[20px] tracking-[0.32px]">
          Movie Z
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex justify">
          <img className="w-8 h-8 bg-white p-2 4 border rounded-md border-solid border-[#E4E4E7]" src="search.png" />
          <div>
            <input className="w-0 h-0" type="search"></input>
          </div>
        </div>
        <div>
          <img src="dark-mode.png" />
        </div>
      </div>
    </div>
  );
};
