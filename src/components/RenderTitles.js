import React from 'react'

const RenderTitles = props => (
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Release Year</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.titles.length > 0 ? (
                props.titles.map(title => (
                    <tr key={title.id}>
                        <td>{title.title}</td>
                        <td>{title.releaseYear}</td>
                        <td>
                            <button className = "button" onClick = {() => { props.editRow(title)}}>edit</button>
                            <button className="button">delete</button>
                            
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <p> no titles</p>
                </tr>
            )}
        </tbody>
    </table>
)

export default RenderTitles
