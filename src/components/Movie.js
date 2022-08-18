import React from "react";


const Movie = ({ movieTitle, overview }) => {


    return (
        <div className="movie">
            <h3>{ movieTitle }</h3>
            <p>{ overview }</p>
        </div>

    );
}

export default Movie;

