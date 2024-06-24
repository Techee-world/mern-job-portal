import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayFavoriteData } from "../../redux/actions/favoriteAction";

const Favorite = () => {
  const [favorite, setFavorite] = useState("black");

  const dispatch = useDispatch();
  const jobList = useSelector(
    (state) => state.userFavoriteDataList.displayFavoriteData
  );
  console.log(jobList, "aaaaaa--aaaaa");
  useEffect(() => {
    dispatch(displayFavoriteData());
  }, [dispatch]);

  return (
    <div className="m-auto lg:w-3/4">
      <div className=" p-4 w-full">
        <div className="border w-1/3 lg:hidden px-4 py-1 rounded-full mb-4 font-bold shadow-md hover:bg-blue-200 duration-700 cursor-pointer">
          sort filter
        </div>
        {jobList.map((item, index) => (
          <div key={index} className="border w-full p-4 mb-4 shadow-md">
            <div className="flex justify-end cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 256 256"
                onClick={() =>
                  setFavorite(favorite === "black" ? "white" : "black")
                }
              >
                <g>
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="none"
                    strokeMiterlimit="10"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <path
                      transform="scale(8,8)"
                      d="M25,5v23l-1.59375,-1.1875l-7.40625,-5.5625l-7.40625,5.5625l-1.59375,1.1875v-23z"
                      id="strokeMainSVG"
                      fill={favorite}
                      stroke="#1015e7"
                      strokeLinejoin="round"
                    ></path>
                    <g
                      transform="scale(8,8)"
                      fill="#000000"
                      stroke="none"
                      strokeLinejoin="miter"
                    >
                      <path d="M7,5v23l1.59375,-1.1875l7.40625,-5.5625l7.40625,5.5625l1.59375,1.1875v-23zM9,7h14v17l-6.40625,-4.8125l-0.59375,-0.4375l-0.59375,0.4375l-6.40625,4.8125z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex gap-4 items-center m-2">
              <img
                className="w-16 h-16"
                src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png"
                alt="image-icon"
              />
              <div>
                <h1 className="font-bold">{item.title}</h1>
                <h1 className="font-medium">{item.name}</h1>
                <h4 className="  text-sm  rounded-sm">{item.location}</h4>
                <div className="flex mt-2 items-center gap-4">
                {item.type.map((item)=>
                  <h4 className="px-2 py-1 text-xs bg-gray-200 rounded-sm">
                    {item}
                  </h4>
                )}
                </div>
                <p className="font-semi-bold text-xs mt-2"> {item.salary} 100 per Annual</p>
              </div>
            </div>
          </div>
          ))} 
        <hr />
      </div>
    </div>
  );
};

export default Favorite;
