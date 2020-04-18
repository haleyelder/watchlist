import React, { useState, useEffect } from "react";
import axios from 'axios'

// import SearchBar from "./components/SearchBar";
// import Movie from "./components/Movie";
// import AddTitle from "./components/AddTitleForms";

import "./styles/styles.css";

const movieURL = "http://www.omdbapi.com/?t=American+Gods&apikey=7f07f413";
//${searchterm} when adding the search bar

const App = () => {
  const [titles, setTitles] = useState([]);
  const [genre, setGenre] = useState([])

  useEffect(() => {
    fetch(movieURL)
      .then((res) => res.json())
      .then((response) => {
          
        setTitles(response.Title);
        setGenre(response.Genre)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
       <span>Titles {titles}</span> 
       <br></br>
       <span> Genre: {genre}</span>
    </div>
    )
};


export default App;
