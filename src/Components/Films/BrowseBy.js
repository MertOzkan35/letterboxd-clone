import React from "react";

function BrowseBy() {
  return (
    <div>
      <div className="w-full h-[200px] bg-[#1b2228] flex flex-row justify-between items-center p-20">
        <div className="flex flex-row text-lg  text-[#899aa9] ">
          <p>BROWSE BY</p>
          <div className="border-2 border-[#232a31] flex text-center  ml-4">
            <select className="bg-[#1b2127]    w-[140px] border-r-2 border-[#232a31] focus:bg-[#D3D3D3] focus:text-black focus:text-opacity-60 ">
              <option>YEAR</option>
              <option>ALL</option>
              <option>2020s</option>
              <option>2010s</option>
              <option>2000s</option>
            </select>
            <select className="bg-[#1b2127] w-[140px] border-r-2 border-[#232a31] focus:bg-[#D3D3D3]  focus:text-black focus:text-opacity-60 ">
              <option>GENRE</option>
              <option>ALL</option>
              <option>2020s</option>
              <option>2010s</option>
              <option>2000s</option>
            </select>
            <select className="bg-[#1b2127] w-[140px] border-r-2 border-[#232a31] focus:bg-[#D3D3D3]  focus:text-black focus:text-opacity-60 ">
              <option>OTHER</option>
              <option>ALL</option>
              <option>2020s</option>
              <option>2010s</option>
              <option>2000000000000000000000s</option>
            </select>
          </div>
        </div>
        <div className=" flex  items-center ">
          <p className="flex flex-row text-lg font-semibold  text-[#899aa9] ">
            FIND A FILM
          </p>
          <input className="w-[250px] ml-5 h-[40px] bg-[#2c3440] rounded-lg focus:bg-slate-100 pl-2"></input>
        </div>
      </div>
      <p className=" bg-[#1b2228] pl-16 text-xl text-[#63707d] hover:text-[#42668a] w-full border-b-2 border-[#445566] hover:border-[#42668a]">
        ALL FILMS FOR YOU
      </p>
    </div>
  );
}

export default BrowseBy;
