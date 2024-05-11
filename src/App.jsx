import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import {
  Search,
  MovieDetails,
} from "./pages";
import { NowPlaying, Popular, TopRated, Upcoming } from "./pages/Movie";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

const App = () => {
  return (
    <>
      <section className="w-full mx-auto overflow-hidden bg-black-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<NowPlaying />} />
          <Route path="/movie/nowplaying" element={<NowPlaying />} />
          <Route path="/movie/top-rated" element={<TopRated />} />
          <Route path="/movie/upcoming" element={<Upcoming />} />
          <Route path="/movie/:movie_id" element={<MovieDetails />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </section>
    </>
  );
};

export default App;
