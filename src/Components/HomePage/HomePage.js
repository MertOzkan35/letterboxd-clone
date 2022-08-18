import React from "react";

function HomePage() {
  return (
    <div className="w-full h-[100rem] justify-start items-center absolute -z-50 flex flex-col bg-[#14181d]">
      <div className="w-full h-[27rem] drop-shadow-2xl ">
        <img
          className="object-cover drop-shadow-2xl "
          src={require("../../../src/İmages/Homeimg.jpg")}
        />
      </div>
      <div className=" w-[42rem] h-[22rem] relative z-10 leading-normal flex justify-center items-center text-white text-center font-bold text-5xl  ">
        Track films you’ve watched. Save those you want to see. Tell your
        friends what’s good.
      </div>
      <div className=" w-full h-[8rem] flex flex-col  justify-between items-center ">
        <button className="w-[21rem] h-[3rem] bg-[#00b020] text-2xl p-2 justfy- rounded-xl text-white ">
          GET STARTED - IT'S FREE
        </button>
        <p className="text-xl text-[#6a7c84]">
          The social network for film lovers.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
