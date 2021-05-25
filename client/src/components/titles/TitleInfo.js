import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom';

const TitleInfo = (props) => {
    const [title, setTitle] = useState({})

    useEffect(function() {
        async function getTitle() {
            try {
                const response = await axios.get(`/api/titles/${props.match.params._id}`);
                setTitle(response.data)
            } catch(error) {
                console.log('error', error)
            }
        }
        getTitle();
    }, [props])

    async function handleDelete() {
        try {
            await axios.delete(`/api/titles/${props.match.params._id}`)
            props.history.push('/titles')
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Title: {title.title}</h2>
            <small>_id: {title._id}</small>
            <p>Year: {title.year}</p>

            <div className="btn-group">
                <Link to={`/titles/${title._id}/edit`} className="btn btn-primary">Edit</Link> 
                <button onClick={handleDelete} className="btn btn-danger">Delete</button> 
                <Link to="/titles" className="btn btn-secondary">Close</Link>
            </div>
            <hr/>
        </div>
    )
}

export default TitleInfo