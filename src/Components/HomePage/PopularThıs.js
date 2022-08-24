import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function PopularThıs() {
  const data = useSelector((state) => state.mert.data);
  //   const random = Math.floor(Math.random() * 8);
  return (
    <div className="w-full h-[50rem] bg-[#14181c] flex flex-col">
      <div className="flex flex-col w-4/5 text-[#63707d] ml-32 mt-11 border-b-2 hover:text-[#42668a] hover:border-[#42668a] border-[#445566]">
        <p>POPULAR REVIEWS THIS WEEK</p>
      </div>
      <div className="w-full h-[17rem] mt-16 bg-[#14181c] flex flex-row justify-center items-center ">
        {data.slice(0, 5).map((element, key) => {
          return (
            <div
              key={key}
              className="w-[11rem]  h-[16rem]  rounded-3xl mx-7 my-2 flex items-center justify-center  "
            >
              <img
                className=" w-[11rem]  h-[16rem] border-2 border-[#1b2228] hover:border-[#00b020] rounded-3xl object-cover"
                src={require(`../../images/${element.img}`)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-between  items-center w-4/5 h-[10rem]  text-[#63707d] ml-32 mt-12  hover:text-[#42668a]  ">
        <p className=" w-full border-b-2 border-[#445566] hover:border-[#42668a]">
          LIST FOR YOU
        </p>
        <Link to="/lists">
          <button className="w-[21rem] h-[3rem] bg-[#00b020] hover:border-2 text-xl p-2 justfy- rounded-xl text-white  ">
            FOR BEST LISTS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PopularThıs;
