import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteMovie } from "../../store/slices/favoriteMovieSlice";
import { addWatchMovie } from "../../store/slices/forWatchList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { deleteWatchMovie } from "../../store/slices/forWatchList";
import { deleteFavoriteMovies } from "../../store/slices/favoriteMovieSlice";

function WatchList() {
  const data = useSelector((state) => state.mert.data);
  const isLoginValue = useSelector((state) => state.login.login);
  const favorite = useSelector((state) => state.favorite.favoriteMovies);
  const watch = useSelector((state) => state.forwatch.watchMovies);
  const dispatch = useDispatch();

  // data.map((movie) => {
  //   const valueFavoriteRed = favorite.find((x) => x.Id === movie.Id);
  //   console.log(valueFavoriteRed);
  // });

  // const valueFavorite = favorite.map((x) =>
  //     x.includes(element.Id) ? true : false
  //   );

  // const valueFavorite = favorite.includes(element) ? true : false;
  // if (valueFavorite) {
  //   dispatch(deleteFavoriteMovies(element));
  // } else {
  //   dispatch(addFavoriteMovie(element));
  // }

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

  // const addToForWatchMovies = (element) => {
  //   const valueWatch = watch.includes(element) ? true : false;
  //   if (valueWatch) {
  //     dispatch(deleteWatchMovie(element));
  //   } else {
  //     dispatch(addWatchMovie(element));
  //   }
  // };
  return (
    <div className="w-full h-full  justify-center items-center flex flex-col bg-[#1f252c]  ">
      <div className=" w-full  h-[102px] sm:h-[92px] bg-[#14181c]"></div>
      <div className="w-4/5 h-full  flex flex-col sm:flex-row justify-center items-center text-center  pt-16 pb-8 bg-[#1f252c]  ">
        <p className=" w-1/4   h-full font-bold text-2xl text-[#fffffe] hover:text-[#61dafb] pt-3">
          Welcome {localStorage.getItem("userName")}
        </p>

        <div className="flex mt-4 sm:mt-0">
          <div className="flex flex-col sm:ml-32 justify-center w-32 text-center border-r-2 border-[#232d38]">
            <p className=" mb-4 pt-2  font-bold text-2xl text-[#fffffe]">
              {favorite.length}
            </p>
            <p className="  h-full font-bold  text-[#fffffe] text-xs font-serif opacity-40 hover:text-[#61dafb] hover:opacity-80">
              FAVOR??TE
            </p>
          </div>
          <div className="flex flex-col  justify-center w-32 text-center ">
            <p className="  mb-4 pt-2  font-bold text-2xl text-[#fffffe]">
              {watch.length}
            </p>
            <p className="  h-full font-bold  text-[#fffffe] text-xs font-serif opacity-40 hover:text-[#61dafb] hover:opacity-80">
              WATCH LIST
            </p>
          </div>
        </div>
        <div className="w-1/2 h-36 flex justify-center mt-6 sm:mt-0 items-center text-center ">
          <img
            className=" h-full  object-cover   rounded-2xl "
            src={require("../../images/cowboyk.jpg")}
          />
        </div>
      </div>
      <div className=" w-4/5 h-[72px] flex  gap-5 justify-start items-center pl-6  text-sm sm:text-base   my-12 bg-[#1f252c] border-2 border-[#232d38] ">
        <Link to="/profile">
          <button className="font-bold  text-[#fffffe]  font-serif opacity-40 hover:text-[#61dafb] hover:opacity-80 ">
            {" "}
            PROF??LE
          </button>
        </Link>
        <Link to="/favoritemovies">
          <button className="font-bold  text-[#fffffe]  font-serif opacity-40 hover:text-[#61dafb] hover:opacity-80 ">
            {" "}
            FAVOR??TE
          </button>
        </Link>
        <Link to="/watchlist">
          <button className="font-bold  text-[#fffffe]  font-serif opacity-40 hover:text-[#61dafb] hover:opacity-80 ">
            {" "}
            WATCH LIST
          </button>
        </Link>
      </div>
      <div className="flex flex-col w-4/5 text-[#63707d] mt-11   border-b-2 hover:text-[#42668a] hover:border-[#42668a] border-[#445566]">
        <p>YOUR WATCH LIST</p>
      </div>
      <div className="w-4/5 h-full mt-16  mb-16  grid grid-cols-2 sm:grid-cols-5 justify-center items-center   ">
        {watch &&
          watch.map((element, key) => {
            return (
              <div
                key={key}
                className="  flex  justify-center items-end mb-6 gap-2  h-[16rem] xl:h-[18rem] object-cover    rounded-3xl  group  "
              >
                <Link
                  className="absolute w-[9rem] h-[13rem] sm:w-[11rem]  sm:h-[16rem] xl:w-[13rem] xl:h-[18rem]"
                  to={`/movie/${element.Id}`}
                >
                  <img
                    className=" absolute w-[9rem] h-[13rem] sm:w-[11rem]  sm:h-[16rem] xl:w-[13rem] xl:h-[18rem] border-2 border-[#1b2228] hover:border-[#00b020] rounded-3xl object-cover"
                    src={require(`../../images/${element.img}`)}
                  />
                </Link>
                {isLoginValue && (
                  <div className="w-3/5 h-10 mb-2 z-10 flex justify-center rounded-lg bg-black opacity-70  gap-4 sm:invisible  sm:group-hover:visible  ease-in-out duration-100 ">
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
  );
}

export default WatchList;
