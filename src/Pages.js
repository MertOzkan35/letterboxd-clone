import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FilmsMain from "./Components/Films/FilmsMain";
import ListMain from "./Components/Lists/ListMain";
import Journal from "./Components/Journal/Journal";
import HomePage from "./Components/HomePage/HomePage";
import GoldenMovies from "./Components/Lists/GoldenMovies";
import HorrorMovies from "./Components/Lists/HorrorMovies";
import DirectorMovies from "./Components/Lists/DirectorMovies";
import Profile from "./Components/Profile/profile";
import WatchList from "./Components/Profile/watchList";
import FavoriteMovies from "./Components/Profile/favoriteMovies";
import FilmInfo from "./Components/FilmInfo/filmInfo";

function Pages() {
  const isLoginValue = useSelector((state) => state.login.login);
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

        <Route path="/movie/:id" element={<FilmInfo />} />

        {isLoginValue && <Route path="/profile" element={<Profile />} />}
        {isLoginValue && (
          <Route path="/favoritemovies" element={<FavoriteMovies />} />
        )}
        {isLoginValue && <Route path="/watchlist" element={<WatchList />} />}
      </Routes>
    </div>
  );
}

export default Pages;
