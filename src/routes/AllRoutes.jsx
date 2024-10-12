import { Routes, Route } from "react-router-dom";
import MovieList from "../pages/MovieList";
import MovieDetails from "../pages/MovieDetails";
import SearchMovie from "../pages/SearchMovie";
import PageNotFound from "../pages/PageNotFound";


function AllRoutes() {
  return (
  <div >
    <Routes>
        <Route path="" element = {<MovieList urlPath ="trending/movie/day"/>} />
        <Route path="movie/:id" element = {<MovieDetails  />} />
        <Route path="movies/popular" element = {<MovieList urlPath = "movie/popular"/>} />
        <Route path="movies/toprated" element = {<MovieList urlPath = "movie/top_rated" />} />
        <Route path="movies/upcoming" element = {<MovieList urlPath = "movie/upcoming" />} />
        <Route path="movies/nowplaying" element = {<MovieList urlPath = "movie/now_playing" />} />
        <Route path="search" element = {<SearchMovie urlPath="search/movie" />} />
        <Route path="*" element = {<PageNotFound />} />
    </Routes>
  </div>
  );
}

export default AllRoutes;
