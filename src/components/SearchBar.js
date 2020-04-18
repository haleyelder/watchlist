import React, {useState} from "react";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("")

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  }
  
  const resetInput = () => {
    setSearchValue("")
  }

  const callSearch = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInput();
  }
  
  
  return (
    <div>
      <header>Watchlist!</header>

      <h2>{props.text}</h2>

      <form>
        <input  
          value={searchValue}
          onChange={handleSearchInput}
          type="text"
        />
        <input onClick={callSearch} type="submit" value="search"/>
      </form>
    </div>
  );
};

export default SearchBar;
