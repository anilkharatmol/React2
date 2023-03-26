import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
 

const[movies,setMovies]=useState([]);

const[isLoading,setIsLoading]=useState(false);

const[error,setError]=useState(null);

const[retry,setRetry]=useState(false);

 async function fetchMoviesHandler(){
  
   setError(null);
  try {
  const response=await  fetch('https://swapi.dev/api/film');
  if (!response.ok){
    throw new Error('Something went wrong...Retrying');
  }
  const data= await response.json();


    const transformedMovies=data.results.map((movieData)=>{

    
      return{
      id:movieData.episode_id,
      title:movieData.title,
      openingText:movieData.opening_crawl,
      releaseDate:movieData.release_date
       }
      });
      setMovies(transformedMovies)
    }
    
    catch (error) {
      setError(error.message);
      setInterval(() => {
       setRetry(true);
      }, 5000);
    }
    

    setIsLoading(false);
}
   
    
    return (
      <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading &&<h1>LOADING....</h1>}
        {retry}
      {!isLoading && <MoviesList movies={movies} />}
      {!isLoading && error && <div><h1>{error}</h1>
      <button onClick={()=>{setIsLoading(true)}}>Cancel</button></div>}
      </section>
    </React.Fragment>
  );
}

export default App;
