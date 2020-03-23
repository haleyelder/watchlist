import React, { useState } from "react";

const AddTitleForm = props => {
  const initialFormState = { id: null, title: "", releaseDate: "" };
  const [title, setTitles] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setTitles({ ...title, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!title.title || !title.releaseDate) return;

        props.addTitle(title);
        setTitles(initialFormState);
      }}
    >

    
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={title.title}
        onChange={handleInputChange}
      />
      <label>Release Date</label>
      <input
        type="text"
        name="releaseDate"
        value={title.releaseDate}
        onChange={handleInputChange}
      />
      <button>add new title</button>
      <button onClick={() => props.deleteTitle(title.id)} className="button">Delete</button>
    </form>
  );
};

export default AddTitleForm;
