import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ListMain() {
  return (
    <div className=" w-full h-full flex flex-col ">
      <div className="w-full  h-[102px] sm:h-[92px] bg-[#14181c]"></div>
      <div className="w-full h-full flex justify-center items-start  bg-[#1b2228]">
        <div className=" w-full px-2 sm:px-0 sm:w-4/5 flex flex-col justify-center items-center mb-8 ">
          <p className="  w-full  text-lg mt-12 text-[#63707d] hover:text-[#42668a]  border-b-2 border-[#445566] hover:border-[#42668a]">
            POPULAR LISTS
          </p>
          <div className="w-full  h-full flex flex-col sm:flex-row items-center border-b-2 border-[#445566] hover:border-[#42668a]">
            <Link to="/listnum1" className="w-[360px]">
              <div className="w-full h-[7.2rem] rounded-xl flex flex-row relative bg-[#1b2228] my-5  border-2 border-[#445566] hover:border-[#00b020] ">
                <img
                  className="   h-[7rem] rounded-xl object-cover z-10 relative  "
                  src={require("../../images/17list1.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[9] right-[45px]"
                  src={require("../../images/21list1.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[8] right-[90px]"
                  src={require("../../images/5list1.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[7] right-[135px]"
                  src={require("../../images/16list1.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[6] right-[180px]"
                  src={require("../../images/19list1.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[5] right-[225px]"
                  src={require("../../images/20list1.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[4] right-[270px]"
                  src={require("../../images/28list1.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[3] right-[315px]"
                  src={require("../../images/33list1.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[2] right-[360px]"
                  src={require("../../images/77list1.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[1] right-[395px]"
                  src={require("../../images/94list1.jpg")}
                />
              </div>
            </Link>
            <div className=" w-full sm:w-3/5 flex flex-col  justify-center text-center   sm:pl-10">
              <Link
                to="/listnum1"
                className=" text-[#ffffff] font font-bold text-[24px] hover:opacity-80 mb-2 "
              >
                10 Golden Movies From the Editor...
              </Link>
              <h1 className=" text-[#8897a7] font font-bold text-[17px] ">
                From Editor: 10 impressive movies of different genres and genres
                that you must watch
              </h1>
            </div>
          </div>
          <div className="w-full h-full flex flex-col sm:flex-row items-center border-b-2 border-[#445566] hover:border-[#42668a]">
            <Link to="/listnum2" className="w-[360px]">
              <div className="w-full h-[7.2rem] rounded-xl flex flex-row relative bg-[#1b2228] my-5  border-2 border-[#445566] hover:border-[#00b020]  ">
                <img
                  className="   h-[7rem] rounded-xl object-cover z-10 relative "
                  src={require("../../images/list255.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[9] right-[45px]"
                  src={require("../../images/list254.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[8] right-[90px]"
                  src={require("../../images/list257.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[7] right-[135px]"
                  src={require("../../images/list258.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[6] right-[180px]"
                  src={require("../../images/list260.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[5] right-[225px]"
                  src={require("../../images/list261.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[4] right-[270px]"
                  src={require("../../images/list262.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[3] right-[315px]"
                  src={require("../../images/list263.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[2] right-[360px]"
                  src={require("../../images/list267.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[1] right-[395px]"
                  src={require("../../images/list265.jpg")}
                />
              </div>
            </Link>
            <div className=" w-full sm:w-3/5 flex flex-col  justify-center text-center    sm:pl-10">
              <Link
                to="/listnum2"
                className=" text-[#ffffff] font font-bold text-[24px] hover:opacity-80 mb-4 "
              >
                Maybe its the Scariest to Somebody....
              </Link>
              <h1 className=" text-[#8897a7] font font-bold text-[17px] ">
                Be careful ! Watching these movies alone can be a bit difficult.
              </h1>
            </div>
          </div>
          <div className="w-full h-full flex flex-col sm:flex-row items-center border-b-2 border-[#445566] hover:border-[#42668a]">
            <Link to="/listnum3" className="w-[360px]">
              <div className="w-full h-[7.2rem] rounded-xl flex flex-row relative bg-[#1b2228] my-5  border-2 border-[#445566] hover:border-[#00b020]  ">
                <img
                  className="   h-[7rem] rounded-xl object-cover z-10 relative "
                  src={require("../../images/list33.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[9] right-[45px]"
                  src={require("../../images/list31.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[8] right-[90px]"
                  src={require("../../images/list39.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[7] right-[135px]"
                  src={require("../../images/list34.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[6] right-[180px]"
                  src={require("../../images/list351.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[5] right-[225px]"
                  src={require("../../images/list312.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[4] right-[270px]"
                  src={require("../../images/list313.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[3] right-[315px]"
                  src={require("../../images/list370.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[2] right-[360px]"
                  src={require("../../images/list311.jpg")}
                />
                <img
                  className="   h-[7rem] rounded-xl object-cover relative z-[1] right-[395px]"
                  src={require("../../images/list38.jpg")}
                />
              </div>
            </Link>
            <div className=" w-full sm:w-3/5 flex flex-col   justify-center text-center   sm:pl-10">
              <Link
                to="/listnum3"
                className=" text-[#ffffff] font font-bold text-[24px] hover:opacity-80 mb-4 "
              >
                Best Works of Directors...
              </Link>
              <h1 className=" text-[#8897a7] font font-bold text-[17px] ">
                Directors' favorite job in their career
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMain;
