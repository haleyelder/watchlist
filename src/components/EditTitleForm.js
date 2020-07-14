import React, {useState, useEffect} from 'react'

const EditTitleForm = (props) => {
    const [title, setTitle] = useState(props.currentTitle)

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setUser({ ...title, [name]: value })
    }
    
    useEffect(() => {
        setTitle(props.currentTitle)
    }, [props])
    
    return (
        <form   
            onSubmit= {(event) => {
                event.preventDefault()

                props.updateTitle(title.id, title)
            }}
        >
            <label>Name</label>
            <input 
                type="text"
                name="name"
                value={title.name}
                onChange={handleInputChange}
            />
            <button>update title</button>
            <button 
                onClick={() => [props.setEditing(false)]}
            >
                Cancel
            </button>
        </form>
    )
}

export default EditTitleForm
