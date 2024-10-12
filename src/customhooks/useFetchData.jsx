
import  { useState, useEffect } from 'react';

function useFetchData(urlPath, searchTerm = "") {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${urlPath}?api_key=d32ff49d23f8a197e2a9ce5fd3abdd92&query=${searchTerm}`;

    useEffect(() => {
        async function fetchMovieData() {
          const res = await fetch(url);
          const getData =  await res.json();
          console.log(getData);
          setData(getData.results);
        }
        fetchMovieData();
      }, [url])
  return (
    {data}
  );
}

export default useFetchData;
