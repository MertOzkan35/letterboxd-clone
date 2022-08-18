import { Routes, Route } from "react-router-dom";
import FilmsMain from "./Components/Films/FilmsMain";
import ListMain from "./Components/Lists/ListMain";
import Journal from "./Components/Journal/Journal";
import HomePage from "./Components/HomePage/HomePage";

function Pages() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="/films" element={<FilmsMain />} />

        <Route path="/lists" element={<ListMain />} />

        <Route path="/journal" element={<Journal />} />
      </Routes>
    </div>
  );
}

export default Pages;
