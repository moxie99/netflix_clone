import React, {useState, useEffect} from 'react';
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {
    //usestate to keep track of movies: like store movies 
    const [movies, setMovies] = useState([]);
    // useEffect is a hook that runs based on soecific conditions
    // when the row loads, this code runs, if blank run once and run no more
    // if parameter exists, it runs anytime parameter changes
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request
        }
        fetchData(); 
    }, [fetchUrl]);

    console.table(movies);
  return (
    <div className="row">
         <h2>{title}</h2>
         <div className="row__posters">
            {movies.map(movie => (
                <img className="row__poster" src={`${base_url}${movie.poster_path}`} alt ={movie.name}/>
            )
                )}
         </div>
    </div>
  )
}

export default Row;