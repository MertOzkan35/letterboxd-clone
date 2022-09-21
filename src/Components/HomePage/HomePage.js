import React from "react";
import img from "../../images/Listsmain.jpg";
import PopularThıs from "./PopularThıs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-full justify-start items-center relative  flex flex-col bg-[#14181d]">
      <div className="w-full  drop-shadow-2xl  relative">
        <div
          style={{
            backgroundImage: `url(${img})`,
            position: "relative",
            height: 600,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            height: 200,
            width: "100%",
            position: "absolute",
            bottom: 0,
            backgroundImage:
              "linear-gradient(0deg,#14181d 0,rgba(20,24,29,.986) 15.92833333%,rgba(20,24,29,0) 56.87777778%,rgba(20,24,29,0) 58.51851852%)",
          }}
        ></div>
      </div>
      <div className=" w-3/4  relative  leading-normal flex justify-center  text-white text-center font-bold text-5xl  ">
        Track films you’ve watched. Save those you want to see. Tell your
        friends what’s good.
      </div>
      <div className=" w-full h-[9rem] flex flex-col  justify-center  items-center ">
        <Link to="/films">
          <button className="w-[21rem] h-[3rem] hover:border-2 bg-[#00b020] text-xl p-2 justfy- rounded-xl text-white ">
            ALL FILMS FOR YOU
          </button>
        </Link>
        <p className="text-xl  mt-6  flex justify-center items-center text-[#6a7c84]">
          The social network for film lovers.
        </p>
      </div>
      <PopularThıs />
    </div>
  );
}

export default HomePage;
