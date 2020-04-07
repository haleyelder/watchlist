import React from "react";
import SearchBar from "./components/SearchBar"
import UserList from './components/UserList'
import AddTitle from "./components/AddTitleForms"

import "./styles/styles.css"


const App = () => {
  const user = 'Haley'
  return (
    <div>
      <h2> Welcome, {user}</h2>
      <SearchBar/>
      <h3> {user}'s current list</h3>
      <UserList/>
      <hr/>
      <AddTitle/>
    </div>
  )
}

export default App;
