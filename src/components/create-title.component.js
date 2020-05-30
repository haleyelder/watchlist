import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { post } from "axios";

const AddTitle = (props) => {
  const initialState = {title: '', year: ''}
  const [title, setTitle] = useState(initialState)

  const handleChange = (e) => {
    setTitle({...title, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.title || !title.year) return 
    async function postTitle() {
      try {
        const response = await post('"http://localhost:5000/titles"', title)
        props.history.push(`http://localhost:5000/titles/${response.data._id}`)
      } catch(err) {
        console.log('error', err);
      }
    }
    postTitle();
  }

  const handleCancel = () => {
    props.history.push('http://localhost:5000/titles')
  }

  return (
    <div>
      <h1> Create Title</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label> 
          <input name="title" type="text" value={title.title} onChange={handleChange} className="form-control"/>
        </div>
        {/* <div className="form-group">
          <label>Year</label> 
          <input name="title" type="text" value={title.year} onChange={handleChange} className="form-control"/>
        </div> */}
        <div className="btn-group">
          <input type="submit" value="submit" className="btn btn-primary" />
          <button type="button" onClick={handleCancel} className="btn btn-secondary"> Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddTitle