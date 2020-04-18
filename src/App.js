import React, { useState, useEffect } from "react";
import axios from 'axios'

// import SearchBar from "./components/SearchBar";
// import Movie from "./components/Movie";
// import AddTitle from "./components/AddTitleForms";

import "./styles/styles.css";

const movieURL = "http://www.omdbapi.com/?t=American+Gods&apikey=7f07f413";

class App extends React.Component {
  state = {
    titleData: {}
  }

  componentDidMount() {
    axios.get(movieURL)
    .then(res => res.data)
    .then(res => {
      this.setState({ titleData: res })
    });
  }

  render() {
    const {
      Title, 
      Genre
    } = this.state.titleData

    return (
      <div>
        <span>{Title}</span>
        <br></br>
        <span>{Genre}</span>
        
      </div>
    )
  }

}

export default App;
