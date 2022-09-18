import React, { useState, useEffect } from "react";
import BrowseBy from "./BrowseBy";
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteMovie } from "../../store/slices/favoriteMovieSlice";
import { addWatchMovie } from "../../store/slices/forWatchList";

function FilmsMain() {
  const data = useSelector((state) => state.mert.data);
  const isLoginValue = useSelector((state) => state.login.login);
  const [SelectsValue, setSelectsValue] = useState({ year: "", genre: "" });
  const [NewData, setNewData] = useState(data);
  const [filterData, setFilterData] = useState(data);
  const dispatch = useDispatch();
  useEffect(() => {
    filter();
  }, [SelectsValue]);
  const YearSelectValue = async (event) => {
    let { year, genre } = SelectsValue;
    // bu year : SelectsValue.year ın kısa hali
    if (event.year) {
      year = event.year;
    }
    if (event.genre) {
      genre = event.genre;
    }

    setSelectsValue({ ...SelectsValue, year, genre });
  };

  const filter = () => {
    if (SelectsValue.year === "Year" && SelectsValue.genre === "Genre") {
      setFilterData(NewData);
    } else if (SelectsValue.genre !== "" || SelectsValue.year !== "") {
      setFilterData(
        NewData.filter((item) =>
          SelectsValue.genre !== "" && SelectsValue.year !== ""
            ? item.Category === SelectsValue?.genre &&
              item.Part === SelectsValue?.year
            : item.Category === SelectsValue?.genre ||
              item.Part === SelectsValue?.year
        )
      );
    }
  };

  const FilmName = (event) => {
    const name = event.toLowerCase();
    setFilterData(NewData);
    setFilterData(NewData.filter((item) => item.Name.includes(name)));
  };

  const addToFavoriteMovies = (element) => {
    dispatch(addFavoriteMovie(element));
  };
  const addToForWatchMovies = (element) => {
    dispatch(addWatchMovie(element));
  };
  return (
    <div className=" w-full h-full flex flex-col  ">
      <div className="w-full h-[92px] bg-[#14181c]"></div>
      <BrowseBy ChangeYear={YearSelectValue} FilmName={FilmName} />
      <div className="w-full h-full pt-8  bg-[#1b2228] px-12  grid grid-cols-6 gap-10 ">
        {filterData &&
          filterData.map((element, key) => {
            return (
              <div className="w-full h-[17rem] bg-[#1b2228] ">
                <div
                  key={key}
                  className="  flex  justify-center items-end   w-[11rem]  object-cover  h-[16rem]  bg-[#ebecf0] rounded-3xl  group  "
                >
                  <img
                    className=" absolute border-2 border-[#1b2228] hover:border-[#00b020] w-[11rem]  h-[16rem] rounded-3xl object-cover "
                    src={require(`../../images/${element.img}`)}
                  />
                  {isLoginValue && (
                    <div className="w-3/5 h-10 mb-2 z-10 flex justify-center rounded-lg bg-black opacity-70 p-2 gap-4 invisible  group-hover:visible  ease-in-out duration-100 ">
                      <button onClick={() => addToFavoriteMovies(element)}>
                        <img
                          className=" h-6 object-cover hover:bg-[#00b020]  rounded-2xl "
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

export default FilmsMain;
