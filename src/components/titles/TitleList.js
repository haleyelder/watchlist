import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';

const TitleList = () => {
    const [titles, setTitles] = useState([])

    useEffect(() => {
        async function getTitles() {
            try {
                const response = await axios.get('http://localhost:3001/api/titles')
                setTitles(response.data)
            } catch(error) {
                console.log('error', error)
            }
        }
        getTitles()
    }, [])

    return (
        <div>
            <h2>Titles
                <Link to="/titles/new" className="btn btn-primary float-right">Create Title</Link>
            </h2>
            <hr/>
            {titles.map((title) => {
                return (
                    <div key={title._id}>
                        <h4><Link to={`/api/titles/${title._id}`}>{title.title}</Link></h4>
                        <small>_id: {title._id}</small>
                        </div>
                )
            })}
        </div>
    )
}

export default TitleList