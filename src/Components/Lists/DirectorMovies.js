import React from "react";
import img from "../../images/dune.jpg";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { addFavoriteMovie } from "../../store/slices/favoriteMovieSlice";
import { addWatchMovie } from "../../store/slices/forWatchList";
import { deleteWatchMovie } from "../../store/slices/forWatchList";
import { deleteFavoriteMovies } from "../../store/slices/favoriteMovieSlice";

function DirectorMovies() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mert.data);
  const isLoginValue = useSelector((state) => state.login.login);
  const favorite = useSelector((state) => state.favorite.favoriteMovies);
  const watch = useSelector((state) => state.forwatch.watchMovies);
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
    favorite && favorite.find((x) => x.Id === element.Id)
      ? dispatch(deleteFavoriteMovies(element))
      : dispatch(addFavoriteMovie(element));
  };

  const addToForWatchMovies = (element) => {
    watch && watch.find((x) => x.Id === element.Id)
      ? dispatch(deleteWatchMovie(element))
      : dispatch(addWatchMovie(element));
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
      <div className=" flex  justify-center  w-full h-full bg-[#1b2228] ">
        <p className="flex justify-center   w-4/5 h-full py-12 flex-row  text-3xl sm:text-4xl  text-white font-semibold border-b-2 border-[#445566] hover:border-[#42668a] ">
          Directors' favorite job in their career
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-center bg-[#1b2228] ">
        <div className="w-4/5 h-full  py-4  grid grid-cols-2 sm:grid-cols-5  justify-center items-center ">
          {newData.map((element, key) => {
            return (
              <div
                key={key}
                className="h-[16rem] xl:h-[18rem] rounded-3xl  sm:mx-7 my-2 flex  items-end justify-center group "
              >
                <Link
                  className="absolute w-[9rem] h-[13rem] sm:w-[11rem]  sm:h-[16rem] xl:w-[13rem] xl:h-[18rem]"
                  to={`/movie/${element.Id}`}
                >
                  <img
                    className="absolute w-[9rem] h-[13rem] sm:w-[11rem]  sm:h-[16rem] xl:w-[13rem] xl:h-[18rem] border-2 border-[#1b2228] hover:border-[#00b020] rounded-3xl object-cover"
                    src={require(`../../images/${element.img}`)}
                  />
                </Link>
                {isLoginValue && (
                  <div className="w-3/5 h-10 mb-2 z-10 flex justify-center rounded-lg bg-black opacity-70  gap-4 invisible  group-hover:visible  ease-in-out duration-100 ">
                    <button onClick={() => addToFavoriteMovies(element)}>
                      <img
                        className={` h-6 object-cover   rounded-2xl ${
                          favorite && favorite.find((x) => x.Id === element.Id)
                            ? "bg-[#B12403]"
                            : "hover:bg-[#B12403]"
                        }  `}
                        src={require("../../images/heart.png")}
                      />
                    </button>
                    <button onClick={() => addToForWatchMovies(element)}>
                      <img
                        className={` h-6 object-cover   rounded-2xl ${
                          watch && watch.find((x) => x.Id === element.Id)
                            ? "bg-[#00b020]"
                            : "hover:bg-[#00b020]"
                        }  `}
                        src={require("../../images/eye.png")}
                      />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DirectorMovies;
