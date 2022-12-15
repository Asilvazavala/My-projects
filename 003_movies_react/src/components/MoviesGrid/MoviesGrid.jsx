import { MovieCard } from "../MovieCard/MovieCard";
import movies from "../../movies.json";
import "./MoviesGrid.css";

export function MoviesGrid() {

    return (
        <ul className="moviesGrid">
            {movies.map((movie) => (
                 <MovieCard 
                 key = {movie.id} movie ={movie} />
            ))}
        </ul>
    );
}