import React, { useState, useEffect } from "react";
import BrowseBy from "./BrowseBy";
import { useSelector } from "react-redux";
function FilmsMain() {
  const data = useSelector((state) => state.mert.data);
  const [SelectsValue, setSelectsValue] = useState({ year: "", genre: "" });
  const [NewData, setNewData] = useState(data);
  const [filterData, setFilterData] = useState(data);
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

  return (
    <div className=" w-full h-full flex flex-col ">
      <div className="w-full h-[92px] bg-[#14181c]"></div>
      <BrowseBy ChangeYear={YearSelectValue} FilmName={FilmName} />
      <div className="w-full h-full pt-8  bg-[#1b2228] px-12  grid grid-cols-6 gap-10 ">
        {filterData &&
          filterData.map((element, key) => {
            return (
              <div className="w-full h-[17rem] bg-[#1b2228] ">
                <div
                  key={key}
                  className="w-[11rem]  object-cover  h-[16rem]  bg-[#ebecf0] rounded-3xl  flex items-center justify-center  "
                >
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

export default FilmsMain;
