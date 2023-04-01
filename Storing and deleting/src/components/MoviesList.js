import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <div  key={movie.id}>
        <Movie
         
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
        <button onClick={()=>{props.onDelete(movie.id)}}>Delete movie</button>
        </div>
      ))}
    </ul>
  );
};

export default React.memo(MovieList);
