import React, { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import Movie from "./Movie";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        MoviesService.get().then(({ data: { results } }) => {
            setMovies(results);
            console.log(results);
        });
    }, []);

    return (
        <div className="container">
            <div>
                {movies.map(movie => <Movie movieTitle={movie.title} overview={movie.overview}/>)}
            </div>
        </div>
    )
}

export default MoviesList;



