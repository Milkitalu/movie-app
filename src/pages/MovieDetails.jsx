import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';


function MovieDetails() {
  const params = useParams();
  console.log(params);

  const[movieDescriptions, setMovieDescriptions] = useState({});
  const image = `https://image.tmdb.org/t/p/w500/${movieDescriptions.poster_path}`;
  useEffect(()=> {
    async function fetchMovieDetailDescriptions() {
    const response = await fetch (`https://api.themoviedb.org/3/movie/${params.id}?api_key=d32ff49d23f8a197e2a9ce5fd3abdd92`);
      const jsonData = await response.json()
      setMovieDescriptions(jsonData);
      console.log(jsonData);
    }
    fetchMovieDetailDescriptions();
  }, [])
  
  return (

    <main>
      <section className='flex justify-around flex-wrap py-5'>
        <div className='max-w-sm'>
          <img className='rounded' src={image} alt='poster image' />
        </div>
        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
          <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>{movieDescriptions.title}</h1>
          <p className='my-4'>{movieDescriptions.overview}</p>
             {movieDescriptions.genres ? (
                         <p className='my-7 flex flex-wrap gap-2'>
                         {movieDescriptions.genres.map((genre)=> (
                             <span className='mr-2 border border-r-gray-200 rounded dark:border-gray-600 p-2' key = {genre.id}>{genre.name}</span>
                         ))}
                       
                       </p>
             ) : " "}
          
          </div>
      </section>
    </main> //created as a page and defined inside main element.
  )
}

export default MovieDetails;