import { Routes, Route } from "react-router-dom";
import MovieList from "../pages/MovieList";
import MovieDetails from "../pages/MovieDetails";
import SearchMovie from "../pages/SearchMovie";
import PageNotFound from "../pages/PageNotFound";


function AllRoutes() {
  return (
  <>
    <Routes>
        <Route path="/" element = {<MovieList />} />
        <Route path="movies/:id" element = {<MovieDetails />} />
        <Route path="movies/popular" element = {<MovieList />} />
        <Route path="movies/toprated" element = {<MovieList />} />
        <Route path="movies/upcoming" element = {<MovieList />} />
        <Route path="search" element = {<SearchMovie />} />
        <Route path="*" element = {<PageNotFound />} />
    </Routes>
  </>
  );
}

export default AllRoutes;
