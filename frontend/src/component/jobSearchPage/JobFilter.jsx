import React from "react";

const JobFilter = () => {
  return (
    <div className="lg:w-1/4 lg:p-4 hidden lg:block">
      <div className="border px-4 py-1 rounded-full mb-4 font-bold shadow-md hover:bg-blue-200 duration-700 cursor-pointer">
        sort filter
      </div>
      <div className="border  rounded-lg px-4 py-3 shadow-md">
        <div className="my-4 ">
          <h1 className="py-2 font-bold">shorted</h1>
          <button className="rounded-full px-4 py-1 border mr-4 ">
            relevancy
          </button>
          <button className="rounded-full px-4 py-1 border  ">newest</button>
        </div>
        <hr />
        <div className="">
          <h1 className="font-bold my-3">job type</h1>
          <ul className="flex flex-col gap-2 my-2">
            <li>
              <input type="radio" /> <span>full time</span>
            </li>
            <li>
              <input type="radio" /> <span>par time</span>
            </li>
            <li>
              <input type="radio" /> <span>internship</span>
            </li>
            <li>
              <input type="radio" /> <span>freelance</span>
            </li>
          </ul>
          <hr />
        </div>
        <div className="my-2">
          <h1 className="py-2 font-bold">salary</h1>
          <input type="range" className="w-full" />
        </div>
        <hr />
        <div>
          <h1 className="py-2 font-bold">On-site/remote</h1>
          <ul>
            <li>
              <input className="mr-2" type="radio" />
              remote
            </li>
            <li>
              <input className="mr-2" type="radio" />
              on-site
            </li>
            <li>
              <input className="mr-2" type="radio" />
              hybrid
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
