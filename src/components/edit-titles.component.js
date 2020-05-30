import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import {get, patch} from 'axios';

const EditTitle = (props) => {
  const initialState = {title: "", year: ""}
  const [title, setTitle] = useState(initialState);

  useEffect(() => {
    async function getTitle() {
      try {
        const response = await get(`http://localhost:5000/titles/${props.match.params._id}`)
        setTitle(response.data)
      } catch(err) {
        console.log(err)
      }
    }
    getTitle()
  }, [props])

  const handleSubmit = (e) => {
    e.preventDefault();
    async function updateTitle() {
      try {
        await patch(`http://localhost:5000/titles/${title._id}`, title);
        props.history.push(`http://localhost:5000/titles/${title._id}`)
      } catch(err) {
        console.log(err)
      }
    }
    updateTitle();
  }

  const handleChange = (e) => {
    setTitle({...title, [e.target.name]: e.target.value})
  }

  const handleCancel = () => {
    props.history.push(`http://localhost:5000/titles/${title._id}`)
  }
  return (
    <div>
      <h1> Edit {title.title}</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={title.title} onChange={handleChange} className="form-control" />
          <div class="form-group">
            <label>Year</label>
            <input type="text" name="year" value={title.year} onChange={handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">Update</button>
            <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditTitle
