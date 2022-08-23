import React from "react";
import img from "../../images/Homeimg.jpg";
import { useSelector } from "react-redux";

function GoldenMovies() {
  const data = useSelector((state) => state.mert.data);
  const newData = [
    data[4],
    data[15],
    data[16],
    data[18],
    data[19],
    data[20],
    data[27],
    data[32],
    data[76],
    data[93],
  ];

  return (
    <div className=" w-full h-full flex flex-col absolute -z-50 ">
      <div className="relative ">
        <div className="w-full  drop-shadow-2xl  relative -z-50">
          <div
            style={{
              backgroundImage: `url(${img})`,
              position: "relative",
              height: 700,
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
      </div>
      <div>
        <div className="w-full h-[200px] bg-[#1b2228] flex flex-row justify-between items-center p-20">
          <div className="flex flex-row text-[40px]  text-white font-semibold ">
            <p>
              10 impressive movies of different genres and genres that you must
              watch
            </p>
          </div>
        </div>
        <p className=" bg-[#1b2228] pl-20 text-xl text-[#63707d]  hover:text-[#42668a] w-full border-b-2 border-[#445566] hover:border-[#42668a]"></p>
      </div>
      <div className="grid grid-cols-5 ">
        {newData.map((element, key) => {
          return (
            <div
              key={key}
              className="w-full flex justify-center h-[19rem] bg-[#1b2228]   "
            >
              <div className="w-[11rem] flex   mt-6 object-cover  h-[16rem]  bg-[#ebecf0] rounded-3xl   items-center justify-center  ">
                <img
                  className=" border-2 border-[#1b2228] hover:border-[#00b020] w-[11rem]  h-[16rem] rounded-3xl object-cover"
                  src={require(`../../images/${element.img}`)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GoldenMovies;
