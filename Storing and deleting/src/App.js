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
    const response=await  fetch('https://react-movies-a8fde-default-rtdb.firebaseio.com/movies.json');
    if (!response.ok){
      throw new Error('Something went wrong...Retrying');
    }
    const data= await response.json();
    


    
    const transformedMovies=[];

    for(const key in data){
      transformedMovies.push({
        id:key,
        title:data[key].title,
        openingText:data[key].openingText,
        releaseDate:data[key].releaseDate
      })
    }
      setMovies(transformedMovies)
    }
    
    catch (error) {
      setError(error.message);
      // setRetry(true);
    }
    setIsLoading(false);
    
    
  },[])
  
  useEffect(()=>{fetchMoviesHandler()},[fetchMoviesHandler])
   
  async function AddMovieHandler(movie){
   const response=await fetch('https://react-movies-a8fde-default-rtdb.firebaseio.com/movies.json',{
      method:'POST',
      body:JSON.stringify(movie),
      headers:{
        'Content-type':'application/json'
      }
    })
    const data=await response.json();
      console.log(data);
     
    }  

    function deleteMovieHandler(id){
    fetch(`https://react-movies-a8fde-default-rtdb.firebaseio.com/movies/${id}.json`,{
      method:'DELETE', headers:{
        'Content-type':'application/json'
      }}).then((response)=>{console.log(response)})
      console.log(id);
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
      {!isLoading && <MoviesList movies={movies} onDelete={deleteMovieHandler}></MoviesList>}
      {!isLoading && error && <div><h1>{error}</h1>
      <button onClick={()=>{setIsLoading(true)}}>Cancel</button></div>}
      </section>
    </React.Fragment>
  );
}

export default App;
