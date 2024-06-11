import React from "react";

const VacancyJobCard = () => {
  const jobData = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/3536/3536394.png",
      name: "company name",
      range: " range",
      sub: " small description",
      dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repudiandae praesentium culpa, doloremque cum quas facilis eos voluptate labore architecto? ",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/3536/3536394.png",
      name: "company name",
      range: " range",
      sub: " small description",
      dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repudiandae praesentium culpa, doloremque cum quas facilis eos voluptate labore architecto? ",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/3536/3536394.png",
      name: "company name",
      range: " range",
      sub: " small description",
      dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repudiandae praesentium culpa, doloremque cum quas facilis eos voluptate labore architecto? ",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/3536/3536394.png",
      name: "company name",
      range: " range",
      sub: " small description",
      dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repudiandae praesentium culpa, doloremque cum quas facilis eos voluptate labore architecto? ",
    },
  ];

  return (
    <div className=" lg:w-1/2 p-4 w-full  ">
      <div className="border w-1/3 lg:hidden px-4 py-1 rounded-full mb-4 font-bold shadow-md hover:bg-blue-200 duration-700 cursor-pointer">
        sort filter
      </div>

      {jobData.map((item) => (
        <div className="border w-full p-4 mb-4 shadow-md ">
          <div className="flex gap-4 items-center m-2">
            <img className="w-16 h-16" src={item.img} alt="image-icon" />
            <div>
              <h1 className="font-bold">{item.name}</h1>
              <h4>{item.range}</h4>
              <p className="font-semi-bold">{item.sub}</p>
            </div>
          </div>
          <hr />
          <div className="m-2">
            <p>{item.dis}</p>
          </div>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default VacancyJobCard;
