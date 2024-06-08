import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 z-[9] w-full px-6 md:px-10 py-6">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div>
            <span className="md:text-4xl text-2xl text-blue-500 font-semibold">
              Fresher
            </span>{" "}
            <span className="md:text-4xl text-2xl text-orange-500">Job</span>
          </div>
        </Link>
        <ul className="flex gap-2 md:gap-4 items-center font-semibold cursor-pointer ">
          <li className="hover:offset-8 duration-500 hover:underline">Home</li>
          <li className="hover:offset-8 duration-500 hover:underline">About</li>
          <li className="hover:offset-8 duration-500 hover:underline">Job</li>
          <li className="hover:offset-8 duration-500 hover:underline">Info</li>
        </ul>
        <div className="flex gap-4 items-center font-semibold cursor-pointer">
          <button className="">
            <img
              className="md:w-5 md:h-5 w-4 h-4"
              src="https://cdn-icons-png.flaticon.com/128/15680/15680376.png"
              alt=""
            />
          </button>
          <Link to="/login">
            <button className="border px-4 py-1 hover:border-gray-800 duration-700">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar