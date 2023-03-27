import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import AddMovieForm from './components/AddMovieForm';
import './App.css';

function App() {
 

const[movies,setMovies]=useState([]);

const[isLoading,setIsLoading]=useState(false);

const[error,setError]=useState(null);

// const[retry,setRetry]=useState(false);


const fetchMoviesHandler=useCallback(async ()=>{
  setIsLoading(true);
  setError(null);
  try {
    const response=await  fetch('https://swapi.dev/api/films');
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
      // setRetry(true);
    }
    setIsLoading(false);
    
    
  },[])
  
  useEffect(()=>{fetchMoviesHandler()},[fetchMoviesHandler])
   
  function AddMovieHandler(movies){
      console.log(movies);
  }  

    return (
      <React.Fragment>
      <section>
          <AddMovieForm onAddMovie={AddMovieHandler}/>
      </section>
      <section>     
           <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading &&<h1>LOADING....</h1>}
      {!isLoading && <MoviesList movies={movies} />}
      {!isLoading && error && <div><h1>{error}</h1>
      <button onClick={()=>{setIsLoading(true)}}>Cancel</button></div>}
      </section>
    </React.Fragment>
  );
}

export default App;
