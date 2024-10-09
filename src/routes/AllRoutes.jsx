import { Routes, Route } from "react-router-dom";
import MovieList from "../pages/MovieList";
import MovieDetails from "../pages/MovieDetails";
import SearchMovie from "../pages/SearchMovie";
import PageNotFound from "../pages/PageNotFound";


function AllRoutes() {
  return (
  <>
    <Routes>
        <Route path="/" element = {<MovieList urlPath ='movie/now_playing'/>} />
        <Route path="movies/:id" element = {<MovieDetails  />} />
        <Route path="movies/popular" element = {<MovieList urlPath ='movie/popular' />} />
        <Route path="movies/toprated" element = {<MovieList urlPath ='movie/top_rated' />} />
        <Route path="movies/upcoming" element = {<MovieList urlPath ='movie/upcoming' />} />
        <Route path="search" element = {<SearchMovie />} />
        <Route path="*" element = {<PageNotFound />} />
    </Routes>
  </>
  );
}

export default AllRoutes;
