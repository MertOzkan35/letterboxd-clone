import { Routes, Route } from "react-router-dom";
import FilmsMain from "./Components/Films/FilmsMain";
import ListMain from "./Components/Lists/ListMain";
import Journal from "./Components/Journal/Journal";
import HomePage from "./Components/HomePage/HomePage";
import GoldenMovies from "./Components/Lists/GoldenMovies";
import HorrorMovies from "./Components/Lists/HorrorMovies";
import DirectorMovies from "./Components/Lists/DirectorMovies";

function Pages() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="/films" element={<FilmsMain />} />

        <Route path="/lists" element={<ListMain />} />

        <Route path="/journal" element={<Journal />} />

        <Route path="/listnum1" element={<GoldenMovies />} />

        <Route path="/listnum2" element={<HorrorMovies />} />

        <Route path="/listnum3" element={<DirectorMovies />} />
      </Routes>
    </div>
  );
}

export default Pages;
