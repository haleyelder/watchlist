import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import TestData from '../src/components/testData'
import styles from './index.css'

const App = () => {
  const testData = [
    { id: 1, title: 'Legion', releaseDate: '2016' },
    { id: 2, title: 'American Gods', releaseDate: '2017' },
    { id: 3, title: 'The Avengers', releaseDate: '2012' }
  ]

  const [titles, setTitles] = useState(testData)

  return (
    <div className="container">
      <h1> Watchlist (crud) </h1>
      <div className="users">
        <div className="add-users">
          <h2> add title</h2>
        </div>
        <div className="view-users">
          <h2> view titles</h2>
          <TestData titles={titles}/>
        </div>
      </div>
    </div>
  )
}


export default App;
