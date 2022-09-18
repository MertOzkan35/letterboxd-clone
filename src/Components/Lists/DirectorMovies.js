import React from "react";
import img from "../../images/dune.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteMovie } from "../../store/slices/favoriteMovieSlice";
import { addWatchMovie } from "../../store/slices/forWatchList";

function DirectorMovies() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mert.data);
  const isLoginValue = useSelector((state) => state.login.login);
  const newData = [
    data[2],
    data[0],
    data[8],
    data[3],
    data[50],
    data[11],
    data[12],
    data[69],
    data[10],
    data[7],
  ];
  const addToFavoriteMovies = (element) => {
    dispatch(addFavoriteMovie(element));
  };
  const addToForWatchMovies = (element) => {
    dispatch(addWatchMovie(element));
  };
  return (
    <div
      className=" w-full h-full flex flex-col relative
      "
    >
      <div className="relative  ">
        <div className="w-full  drop-shadow-2xl  relative -z-40">
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
            <p>Directors' favorite job in their career</p>
          </div>
        </div>
        <p className=" bg-[#1b2228] pl-20 text-xl text-[#63707d]  hover:text-[#42668a] w-full border-b-2 border-[#445566] hover:border-[#42668a]"></p>
      </div>
      <div className="grid grid-cols-5 ">
        {newData.map((element, key) => {
          return (
            <div
              key={key}
              className="w-full flex justify-center   h-[19rem] bg-[#1b2228] group  "
            >
              <div className="w-[11rem] flex     mt-6 object-cover  h-[16rem]  rounded-3xl   items-end justify-center  ">
                <img
                  className="  absolute w-[11rem] border-2 border-[#1b2228] hover:border-[#00b020]  h-[16rem] rounded-3xl object-cover"
                  src={require(`../../images/${element.img}`)}
                />
                {isLoginValue && (
                  <div className="w-3/5 h-10 mb-2 z-10 flex justify-center rounded-lg bg-black opacity-70 p-2 gap-4 invisible  group-hover:visible  ease-in-out duration-100 ">
                    <button onClick={() => addToFavoriteMovies(element)}>
                      <img
                        className="h-6  object-cover hover:bg-[#00b020]  rounded-2xl "
                        src={require("../../images/eye.png")}
                      />
                    </button>
                    <button onClick={() => addToForWatchMovies(element)}>
                      <img
                        className=" h-6 object-cover hover:bg-[#B12403]  rounded-2xl  "
                        src={require("../../images/heart.png")}
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DirectorMovies;
