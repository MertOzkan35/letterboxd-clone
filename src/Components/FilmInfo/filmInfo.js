import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteMovie } from "../../store/slices/favoriteMovieSlice";
import { addWatchMovie } from "../../store/slices/forWatchList";
import { deleteWatchMovie } from "../../store/slices/forWatchList";
import { deleteFavoriteMovies } from "../../store/slices/favoriteMovieSlice";

function FilmInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.mert.data);
  const selectedMovie = data.find((x) => x.Id === id);
  const isLoginValue = useSelector((state) => state.login.login);
  const favorite = useSelector((state) => state.favorite.favoriteMovies);
  const watch = useSelector((state) => state.forwatch.watchMovies);

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
      <div className=" flex justify-between px-20 items-center  w-full h-[40rem]">
        <div
          className=" w-4/5 h-[30rem]  flex
        "
        >
          <div className="w-1/3 flex justify-center items-start pt-6">
            <img
              className="  w-[16rem]  h-[24rem] border-[#33394b] rounded-lg border-2  object-cover"
              src={require(`../../images/${selectedMovie.img}`)}
            />
          </div>
          <div className="w-2/3  flex flex-col justify-start items-center ">
            <div className="flex flex-col items-start  w-full  mt-6 ml-6 ">
              <p className="text-white w-6/7 font-bold text-2xl font-serif">
                {selectedMovie.Name.toUpperCase()}
              </p>
              <div className="flex gap-2">
                <p className="  pt-2 text-xl text-[#77818f]   font-normal">
                  {selectedMovie.Date}
                </p>
                <p className="  pt-2 text-xl text-[#77818f] font-normal">
                  Directed by {selectedMovie.Director}
                </p>
              </div>
              <p className="w-4/5 mt-6 text-lg text-[#8ba6a0]">
                {selectedMovie.Subject}
              </p>
            </div>
          </div>
        </div>
        {isLoginValue && (
          <div className=" flex justify-center w-1/5 h-[30rem] pt-20">
            <div className=" flex justify-center gap-6 p-6 w-4/5 h-[6rem] rounded-lg bg-[#445566]">
              <button onClick={() => addToFavoriteMovies(selectedMovie)}>
                <img
                  className={`  object-cover   rounded-2xl ${
                    favorite.includes(selectedMovie)
                      ? "bg-[#B12403]"
                      : "hover:bg-[#B12403]"
                  }  `}
                  src={require("../../images/heart2.png")}
                />
              </button>
              <button onClick={() => addToForWatchMovies(selectedMovie)}>
                <img
                  className={`  object-cover   rounded-2xl ${
                    watch.includes(selectedMovie)
                      ? "bg-[#00b020]"
                      : "hover:bg-[#00b020]"
                  }  `}
                  src={require("../../images/eye.png")}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilmInfo;
