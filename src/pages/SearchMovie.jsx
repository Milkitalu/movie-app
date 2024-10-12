import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useFetchData from "../customhooks/useFetchData";

function SearchMovie({urlPath}) {
  const[searchParameters] =useSearchParams();
  const searchTerm = searchParameters.get('q');

  const {data: movies} = useFetchData(urlPath, searchTerm);

  return (
    <main>
      <section className="mpy-6">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0 ? `No Movies found for: "${searchTerm}"` : `Result for: "${searchTerm}"`}
        </p>
      </section>
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

export default SearchMovie