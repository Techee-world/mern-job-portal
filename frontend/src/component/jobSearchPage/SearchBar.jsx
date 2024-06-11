import React from "react";
import search from "../../../src/assets/search.png";
import location from "../../../src/assets/black-placeholder-variant.png";
import experience from "../../../src/assets/experiment-results.png";

const SearchBar = () => {
  return (
    <div>
      <div className="bg-blue-500 max-w-7xl m-auto w-full lg:h-36 h-80 p-10 ">
        <div className="flex lg:flex-row flex-col gap-4 justify-around ">
          <div className="relative">
            <img
              className="w-10 h-10 absolute top-0 left-0"
              src={search}
              alt="search-icon"
            />
            <input
              className="bg-blue-400 rounded-full h-10 px-10 w-full text-white placeholder-white outline-none shadow-md "
              type="text"
              placeholder="Find job ..."
            />
          </div>
          <div className="relative">
            <img
              className="w-5 h-5 absolute top-2 left-3"
              src={location}
              alt="search-icon"
            />
            <input
              className="bg-blue-400 rounded-full  w-full h-10 px-10 placeholder-white  text-white outline-none shadow-md"
              type="text"
              placeholder="Country ..."
            />
          </div>
          <div className="relative">
            <img
              className="w-6 h-6 absolute top-2 left-3"
              src={experience}
              alt="search-icon"
            />
            <input
              className="bg-blue-400 rounded-full h-10 px-10 w-full placeholder-white text-white outline-none shadow-md "
              type="text"
              placeholder="Experience ..."
            />
          </div>
          <div>
            <input
              className="bg-white text-black cursor-pointer  rounded-full h-10 px-10 outline-none shadow-md hover:bg-blue-500 duration-700 hover:text-white"
              type="button"
              value="Search "
            />
          </div>
        </div>
        <h1 className="text-white text-xs mt-5 ml-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          aperiam!
        </h1>
      </div>
    </div>
  );
};

export default SearchBar;
