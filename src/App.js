import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderTitles from "./components/RenderTitles";
import AddTitleForm from "../src/components/AddTitleForm";
import EditTitleForm from "../src/components/EditTitleForm";

import "./index.css";

const App = () => {
  const testData = [
    { id: 1, title: "Legion", releaseYear: "2016" },
    { id: 2, title: "American Gods", releaseYear: "2017" },
    { id: 3, title: "The Avengers", releaseYear: "2012" }
  ];

  const initialFormState = { id: null, title: "", releaseYear: "" };

  const [titles, setTitles] = useState(testData);
  const [editing, setEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(initialFormState);

  const addTitle = title => {
    title.id = titles.length + 1;
    setTitles([...titles, title]);
  };

  const deleteTitle = id => {
    setTitles(titles.filter(title => title.id !== id));
  };

  const editRow = title => {
    setEditing(true);
    setCurrentTitle({
      id: title.id,
      title: title.title,
      releaseYear: title.releaseYear
    });
  };

  const updateTitle = (id, updatedTitle) => {
    setEditing(true);
    setTitles(titles.map(title => (title.id === id ? updatedTitle : title)));
  };

  return (
    <div className="container">
      <h1> Watchlist (crud) </h1>
         <div className="title">
          {editing ? (
            <div>
              <h2>Edit title</h2>
              <EditTitleForm
                editing={editing}
                setEditing={setEditing}
                currentTitle={currentTitle}
                updateTitle={updateTitle}
              />
            </div>
          ) : (
            <div>
              <h2>Add title</h2>
              <AddTitleForm addTitle={addTitle} />
            </div>
          )}
        </div>
        <hr />
        <div className="view-title">
          <h2> view titles</h2>
          <RenderTitles
            titles={titles}
            editRow={editRow}
            deleteTitle={deleteTitle}
          />
        </div>
      </div>
  );
};

export default App;
