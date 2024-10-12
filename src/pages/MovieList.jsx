import useFetchData from '../customhooks/useFetchData';
import MovieCard from "../components/MovieCard.jsx";

function MovieList({urlPath}) {
  
  const {data: movies} = useFetchData(urlPath);


  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap others:justify-evenly">
          {movies.map((movie)=>
            <MovieCard key={movie.id} movie={movie} />
          )}
         </div>
      </section>
    </main>
  );
}       
 
export default MovieList;