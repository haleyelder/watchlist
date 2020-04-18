import React from "react";

const placeholderImg =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster = 
    movie.Poster === 'N/A' ? placeholderImg : movie.Poster;
    return (
      <div>
        <h2>{movie.Title}</h2>
        <div 
          img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
      
      <p>({movie.Year})</p>
      </div>
    )
}

export default Movie
