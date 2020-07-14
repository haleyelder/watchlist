import React, { useState } from "react";

const AddTitleForm = (props) => {
  const initialFormState = { id: null, name: ""};
  const [title, setTitle] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setTitle({ ...title, [name]: value });
  };


  return (
    <form
      className = "add-title"
      onSubmit={(event) => {
        event.preventDefault();
        if (!title.name) return;

        props.addTitle(title);
        setTitle(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={title.name}
        onChange={handleInputChange}
      />
      <br></br>
      <button>add new title</button>
    </form>
  );
};

export default AddTitleForm;
