import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useFetchData from "../customhooks/useFetchData";

function SearchMovie({urlPath}) {
  const[searchParameters] =useSearchParams();
  const searchTerm = searchParameters.get('q');
  const {data: movies} = useFetchData(urlPath, searchTerm);

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

export default SearchMovie