import React, { useState, useEffect } from "react";
import { get, patch } from 'axios';

const TitleEdit = (props) => {
    const initialState = {title: '', year: ''} 
    const [title, setTitle] = useState(initialState)

    useEffect(function() {
        async function getTitle() {
            try {
                const response = await get(`/api/titles/${props.match.params._id}`)
                setTitle(response.data)
            } catch(error) {
                console.log(error)
            }
        }
        getTitle();
    }, [props])

    function handleSubmit(event) {
        event.preventDefault();
        async function updateTitle() {
            try {
                await patch(`/api/titles/${title._id}`, title)
                props.history.push(`/titles/${title._id}`)
            } catch (error) {
                console.log(error)
            }
        }
        updateTitle()
    }

    function handleChange(event) {
        setTitle({...title, [event.target.name]: event.target.value})
    }

    function handleCancel() {
        props.history.push(`/titles/${title._id}`)
    }

    return (
        <div>
            <h1>Edit {title.title}</h1>
                <hr/>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={title.title} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input type="text" name="year" value={title.year} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <input name="type" type="text" value={title.type} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input name="genre" type="text" value={title.genre} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Seasons</label>
                    <input name="seasons" type="text" value={title.seasons} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Date Added:</label>
                    <input name="dateAdded" type="date" value={title.dateAdded} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Date Completed: </label>
                    <input name="dateCompleted" type="date" value={title.dateCompleted} onChange={handleChange} className="form-control" />
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