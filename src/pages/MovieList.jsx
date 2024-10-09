import useFetchData from '../customhooks/useFetchData';
import MovieCard from "../components/MovieCard.jsx";

function MovieList({urlPath}) {
  
  const {data: movies} = useFetchData(`https://api.themoviedb.org/3/${urlPath}?api_key=ac27197c2bbddbd30cca82451ddd6fcf`);


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
 
export default MovieList;