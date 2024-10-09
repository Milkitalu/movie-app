

import  { React, useState, useEffect } from 'react';

function useFetchData(url) {
    const [data, setData] = useState([]);

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