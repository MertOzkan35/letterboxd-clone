import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteMovie } from "../../store/slices/favoriteMovieSlice";
import { addWatchMovie } from "../../store/slices/forWatchList";
import { deleteWatchMovie } from "../../store/slices/forWatchList";
import { deleteFavoriteMovies } from "../../store/slices/favoriteMovieSlice";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Profile() {
  const data = useSelector((state) => state.mert.data);
  const isLoginValue = useSelector((state) => state.login.login);
  const favorite = useSelector((state) => state.favorite.favoriteMovies);
  const watch = useSelector((state) => state.forwatch.watchMovies);
  const dispatch = useDispatch();
  console.log(favorite);

  const addToFavoriteMovies = (element) => {
    const valueFavorite = favorite.includes(element) ? true : false;
    if (valueFavorite) {
      dispatch(deleteFavoriteMovies(element));
    } else {
      dispatch(addFavoriteMovie(element));
    }
  };

  const addToForWatchMovies = (element) => {
    const valueWatch = watch.includes(element) ? true : false;
    if (valueWatch) {
      dispatch(deleteWatchMovie(element));
    } else {
      dispatch(addWatchMovie(element));
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#1f252c]  ">
      <div className=" w-full h-[92px] bg-[#14181c]"></div>
      <div className="w-full h-[192px] flex justify-start  pl-28 py-16 bg-[#1f252c]  ">
        <p className=" w-1/5  h-full font-bold text-2xl text-[#fffffe] hover:text-[#61dafb] pt-3">
          Welcome {localStorage.getItem("userName")}
        </p>

        <div className="flex flex-col ml-32 justify-center w-32 text-center border-r-2 border-[#232d38]">
          <p className="  h-full font-bold text-2xl text-[#fffffe]">
            {favorite.length}
          </p>
          <p className="  h-full font-bold  text-[#fffffe] text-xs font-serif opacity-40 hover:text-[#61dafb] hover:opacity-80">
            FAVORİTE
          </p>
        </div>
        <div className="flex flex-col  justify-center w-32 text-center ">
          <p className="  h-full font-bold text-2xl text-[#fffffe]">
            {watch.length}
          </p>
          <p className="  h-full font-bold  text-[#fffffe] text-xs font-serif opacity-40 hover:text-[#61dafb] hover:opacity-80">
            WATCH LIST
          </p>
        </div>
        <div className="w-1/2 h-36 flex justify-center items-center text-center">
          <img
            className=" h-full  object-cover ml-32 mb-16 rounded-2xl "
            src={require("../../images/cowboyk.jpg")}
          />
        </div>
      </div>
      <div className=" w-4/5 h-[72px] flex  gap-5 justify-start items-center pl-6  mx-28  my-12 bg-[#1f252c] border-2 border-[#232d38] ">
        <Link to="/profile">
          <button className="font-bold  text-[#fffffe]  font-serif opacity-40 hover:text-[#61dafb] hover:opacity-80 ">
            {" "}
            PROFİLE
          </button>
        </Link>
        <Link to="/favoritemovies">
          <button className="font-bold  text-[#fffffe]  font-serif opacity-40 hover:text-[#61dafb] hover:opacity-80 ">
            {" "}
            FAVORİTE
          </button>
        </Link>
        <Link to="/watchlist">
          <button className="font-bold  text-[#fffffe]  font-serif opacity-40 hover:text-[#61dafb] hover:opacity-80 ">
            {" "}
            WATCH LIST
          </button>
        </Link>
      </div>
      <div className="flex flex-col w-4/5 text-[#63707d] ml-32 mt-11 border-b-2 hover:text-[#42668a] hover:border-[#42668a] border-[#445566]">
        <p>POPULAR REVIEWS THIS WEEK</p>
      </div>
      <div className="w-full h-[17rem] mt-16  mb-16 flex flex-row justify-center items-center ">
        {data.slice(15, 20).map((element, key) => {
          return (
            <div
              key={key}
              className="w-[11rem]  h-[16rem]  rounded-3xl mx-7 my-2 flex  items-end justify-center group  "
            >
              <Link
                className="absolute w-[11rem]  h-[16rem]"
                to={`/movie/${element.Id}`}
              >
                <img
                  className=" absolute w-[11rem]  h-[16rem] border-2 border-[#1b2228] hover:border-[#00b020] rounded-3xl object-cover"
                  src={require(`../../images/${element.img}`)}
                />
              </Link>
              {isLoginValue && (
                <div className="w-3/5 h-10 mb-2 z-10 flex justify-center rounded-lg bg-black opacity-70  gap-4 invisible  group-hover:visible  ease-in-out duration-100 ">
                  <button onClick={() => addToFavoriteMovies(element)}>
                    <img
                      className={` h-6 object-cover   rounded-2xl ${
                        favorite.includes(element)
                          ? "bg-[#B12403]"
                          : "hover:bg-[#B12403]"
                      }  `}
                      src={require("../../images/heart.png")}
                    />
                  </button>
                  <button onClick={() => addToForWatchMovies(element)}>
                    <img
                      className={` h-6 object-cover   rounded-2xl ${
                        watch.includes(element)
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
  );
}

export default Profile;
