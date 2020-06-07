import React, {useState} from 'react'
import { post } from 'axios'

const TitleAdd = (props) => {
    const initialState = {title: '', year: ''}
    const [title, setTitle] = useState(initialState);

    const handleChange = (e) => {
        setTitle({...title, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.title || !title.year) return 
        async function postTitle() {
            try {
                const response = await post('http://localhost:3001/api/titles', title)
                props.history.push(`http://localhost:3001/api/titles/${response.data._id}`)
            } catch(error) {
                console.log('error', error)
            }
        }
        postTitle();
    } 

    const handleCancel = () => {
        props.history.push('http://localhost:3001/api/titles')
    }

    return (
        <div>
            <h1>Create Title</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input name="title" type="text" value={title.title} onChange={handleChange} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input name="year" type="text" value={title.year} onChange={handleChange} className="form-control"/>
                </div>
                <div className="btn-group">
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default TitleAdd