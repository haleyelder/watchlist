import React, { useState, useEffect } from "react";
import { get, patch } from 'axios';

const TitleEdit = (props) => {
    const initialState = { title: '', year: '' }
    const [title, setTitle] = useState(initialState)
  
    useEffect(function() {
      async function getTitle() {
        try {
          const response = await get(`/api/titles/${props.match.params._id}`);
          setTitle(response.data);        
        } catch(error) {
          console.log(error);
        }
      }
      getTitle();    
    }, [props]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      async function updateTitle() {
        try {
          await patch(`/api/titles/${title._id}`, title);
          props.history.push(`/titles/${title._id}`);        
        } catch(error) {
          console.log(error);
        }
      }
      updateTitle();
    }
  
    const handleChange = (e) => {
      setTitle({...title, [e.target.name]: e.target.value})
    }
  
    const handleCancel = (e) => {
      props.history.push(`/titles/${title._id}`);
    }

    return (
        <div>
            <h1> Edit {title.title}</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name = "title" value={title.title} onChange={handleChange} className="form-control"/>
                
                <div className="form-group">
                    <label>Year</label>
                    <input type="text" name="year" value={title.year} onChange={handleChange} className="form-control" />
                </div>
                <div className="btn-group">
                    <button type="submit" className="btn btn-primary">Update</button>
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default TitleEdit