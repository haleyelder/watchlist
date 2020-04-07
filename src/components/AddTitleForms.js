import React from "react";

const AddTitle = () => {
  return (
    <div>
      <form className="add-title-form">
        <label>Title:</label>
        <input type="text" name="title" placeholder="title" />
        <br />
        <label>Synopsis</label>
        <input type="text" name="synopsis" placeholder="synopsis" />
        <br />
        <label>Notes:</label>
        <input type="text" name="notes" placeholder="notes" />
        <br />
        <label>Type?</label>
        
        <br/>
        <span>TV</span>
        <input type="radio" name="tv" />
        <span>Movie</span> <input type="radio" name="movie" />
        <br />
        <button>Add</button>
        <button>Cancel</button>
        {/* <input type="submit" value="submit"/> */}
      </form>
    </div>
  );
};

export default AddTitle;
