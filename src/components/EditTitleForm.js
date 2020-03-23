import React, { useState, useEffect } from 'react'

const EditTitleForm = props => {
    const [title, setTitle] = useState(props.currentTitle)

    const handleInputChange = e => {
        const { name, value } = e.target

        setTitle({ ...title, [name]: value })
    }

    useEffect(() => {
        setTitle(props.currentTitle)
    }, [props])

    return (
        <form 
            onSubmit={e => {
                e.preventDefault()
                props.updateTitle(title.id, title)
            }}
        >

            <label>Title</label>
            <input type = "text" name = "title" value = {title.title} onChange = {handleInputChange} />
            <label>Release Year</label>
            <input type = "text" name = "releaseYear" value = {title.releaseYear} onChange = {handleInputChange} />
            <button>Update title</button> 
            <button onClick = {() => props.setEditing(false)} className="button">Cancel</button>
            </form>
    )
}

export default EditTitleForm