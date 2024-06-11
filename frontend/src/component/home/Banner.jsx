import React from "react";
import bannerPic from '../../assets/banner-pic.png'

const Banner = () => {
  return (
    <div>
      <div class="flex flex-col justify-center h-[80vh] py-6">
        <div class="self-center  items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0">
          <div class="w-full text-center sm:text-left sm:w-1/2 py-12 sm:px-8">
            <h1 class="text-purple-600 text-2xl mb-6">
              New Thing:{" "}
              <span class="text-gray-800 font-bold tracking-widest">
                AWE.SOME
              </span>
            </h1>
            <h2 class="font-bold tracking-widest text-4xl">
              Intro goes here...
            </h2>
            <span class="block font-light text-browngray text-2xl my-6">
              <p class="pl-3">Cool Feature</p>
            </span>
            <div class=" pb-12">
              <a
                class="px-10 py-2 text-gray-200 bg-purple-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red"
                href="#about"
              >
                Find Job
              </a>
            </div>
          </div>
          <div class="w-full sm:w-1/2">
            {/* <img src="your_image_source_here" alt="AWE.SOME header"/> */}
            <img className="" src={bannerPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
