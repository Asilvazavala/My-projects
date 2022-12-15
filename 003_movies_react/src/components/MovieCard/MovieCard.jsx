import  "./MovieCard.css";
import React from "react";

    export function MovieCard({ movie }) {
      const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

      const movieMap = () => {
      movie.map((item) => {
          return (
          <ul>
            <li key = {movie.id}>
            {item} </li>
          </ul>
        )})
        }

    return (
    <li className= "movieCard">
        <img 
        width={230}
        height={345}
        className= "movieImage" 
        src={imgUrl} 
        alt={movie.title}
        onClick = {movieMap}
        />   
        <div > {movie.title} </div> 
    </li>
);
}