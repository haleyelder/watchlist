import React from 'react'

const TestData = props => (
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Release Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.titles.length > 0 ? (
                props.titles.map(title => (
                    <tr key={title.id}>
                        <td>{title.title}</td>
                        <td>{title.releaseDate}</td>
                        <td>
                            <button className="button">edit</button>
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

export default TestData
