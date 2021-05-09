import React, { useState } from "react"; 
import { post } from 'axios';

function TitleAdd(props) {
    const initialState = {title: '', year: ''}
    const [title, setTitle] = useState(initialState)

    function handleChange(event) {
        setTitle({...title, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!title.title || !title.year) return 
        async function postTitle() {
            try {
                const response = await post ('/api/titles', title)
                props.history.push(`/titles/${response.data._id}`)
            } catch(error) {
                console.log('error', error)
            }
        }
        postTitle();
    }

    function handleCancel() {
        props.history.push('/titles')
    }

    return (
      <div>
        <h1>Create Title</h1>
        <hr/>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input name="title" type="text" value={title.title} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Year</label>
            <textarea name="year" rows="5" value={title.year} onChange={handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
            <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    )
}

export default TitleAdd