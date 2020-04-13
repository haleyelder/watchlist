import React from "react";
import SearchBar from "./components/SearchBar"
import UserList from './components/UserList'
import AddTitle from "./components/AddTitleForms"

import "./styles/styles.css"


const App = () => {
  const user = 'Haley'
  const titles = [
    {genre: 'fantasy', year: 2017, type: 'tv', title: 'American Gods'},
    {genre: 'sci-fi', year: 1977, type: 'movie', title: 'Star Wars: A New Hope'},
    {genre: 'thriller', year: 2018, type: 'tv', title: 'Dark'},
    {genre: 'drama', year: 2016, type: 'tv', title: 'Mr. Robot'},
    {genre: 'sci - fi', year: 1995, type: 'movie', title: ''},
  ];
  // const title = [
  //     {
  //       // "id": 1,
  //       "title": "American Gods",
  //       "genre": "fantasy, adventure,drama",
  //       "year": 2017,
  //       "type": "tv",
  //       // "seasons": 2,
  //     },
  //     {
  //       // "id": 2,
  //       "title": "Star Wars: A New Hope",
  //       "genre": "sci - fi,fantasy, adventure",
  //       "year": 1977,
  //       "type": "movie",
  //       // "seasons": null,
  //     },
  //     {
  //       // "id": 3,
  //       "title": "Dark",
  //       "genre": "sci - fi, fantasy, thriller",
  //       "year": 2018,
  //       "type": "tv",
  //       // "seasons": 2,
  //     },
  //     {
  //       // "id": 4,
  //       "title": "Mr. Robot",
  //       "genre": "sci - fi, drama, thriller",
  //       "year": 2016,
  //       "type": "tv",
  //       // "seasons": 4,
  //     },
  
  //     {
  //       // "id": 5,
  //       "title": "The Fifth Element",
  //       "genre": "sci - fi, fantasy",
  //       "year": 1995,
  //       "type": "movie",
  //       // "seasons": null,
  //     },
  //   ];
  
  return (
    <div>
      <h2> Welcome, {user}</h2>
      <SearchBar/>
      <h3> {user}'s current list</h3>
      <UserList titles={titles} />
      <hr/>
      <AddTitle/>
    </div>
  )
}

export default App;

