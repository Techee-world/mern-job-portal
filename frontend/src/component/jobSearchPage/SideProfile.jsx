import React from "react";

const SideProfile = () => {
  return (
    <div className="lg:w-1/4 lg:p-4 hidden lg:block">
      <div className="border rounded-lg px-4 py-3 shadow-md mb-4">
        <div className="my-4 flex flex-col items-center ">
          <img
            className="w-16  "
            src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
            alt=""
          />
          <div className="flex flex-col items-center">
            <h1 className="font-bold mt-2">my@email.com</h1>
            <h4>software engineer</h4>
            <p className="text-blue-500">+4 years</p>
          </div>
        </div>
        <hr />
        <div className="mt-5">
          <div className="flex gap-4 items-center mb-3">
            <img
              className="w-6  "
              src="https://cdn-icons-png.flaticon.com/128/3643/3643421.png"
              alt=""
            />{" "}
            <span>Search appear</span>
          </div>
          <div className="flex gap-4 items-center mb-3">
            <img
              className="w-6  "
              src="https://cdn-icons-png.flaticon.com/128/9752/9752461.png"
              alt=""
            />{" "}
            <span>Applied jobs </span>
          </div>
          <div className="flex gap-4 items-center mb-3">
            <img
              className="w-6  "
              src="https://cdn-icons-png.flaticon.com/128/1817/1817616.png"
              alt=""
            />{" "}
            <span>Request</span>
          </div>
        </div>
      </div>
      <div className="border rounded-lg px-4 py-3 shadow-md">
        <div className="my-4 flex gap-3 ">
          <div>
            <img
              className="w-6 h-6  "
              src="https://cdn-icons-png.flaticon.com/128/9466/9466122.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-semibold ">my@email.com</h1>
            <span className="text-sm">Lorem ipsum dolor,</span>
          </div>
        </div>
        <div>
          <p className="text-justify font-medium break-all">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            repudiandae voluptas minima dicta recusandae facilis et nam ipsum
            quibusdam amet?
          </p>
          <img
            className="w-full h-32 rounded-xl my-3"
            src="https://img.freepik.com/premium-photo/autumn-decoration-background-with-orange-leaves-shopping-bag-gift-box-acorn_257995-1032.jpg?size=626&ext=jpg&ga=GA1.1.78975299.1696083630&semt=ais"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
