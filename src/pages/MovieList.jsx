import { useEffect } from "react";
import { useState } from "react";
import React from "react";

import MovieCard from "../components/MovieCard.jsx"

function MovieList() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMoviedData () {
      const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ac27197c2bbddbd30cca82451ddd6fcf");
      const getData =  await res.json();
      console.log(getData);
      setMovies(getData.results);
    }
    fetchMoviedData();
  }, [setMovies])
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie)=>
            <MovieCard key={movie.id} movie={movie} />
          )}
         </div>
      </section>
    </main>
  );
}       
 
export default MovieList