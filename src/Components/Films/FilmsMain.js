import React from "react";
import BrowseBy from "./BrowseBy";
import { useSelector } from "react-redux";
function FilmsMain() {
  const data = useSelector((state) => state.mert.data);
  return (
    <div className=" w-full h-full flex flex-col ">
      <div className="w-full h-[92px] bg-[#14181c]"></div>
      <BrowseBy />
      <div className="w-full h-full pt-8  bg-[#1b2228] px-12  grid grid-cols-6 gap-10 ">
        {data.map((element, key) => {
          return (
            <div
              key={key}
              className="w-[11rem]  object-cover  h-[16rem]  bg-[#ebecf0] rounded-3xl  flex items-center justify-center  "
            >
              <img
                className=" border-2 border-[#1b2228] hover:border-[#00b020] w-[11rem]  h-[16rem] rounded-3xl object-cover"
                src={require(`../../images/${element.img}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilmsMain;
