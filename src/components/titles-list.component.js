import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Title = props => {
  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.description}</td>
      <td>{props.year}</td>
      <td>{props.date}</td>
      <td>
        {/* props._id showing undefined */}
        <Link to={"/edit/" + props._id}>edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteTitle(props._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

const TitlesList = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/titles/")
      .then((result) => setTitles(result.data));
    // .catch(error => {console.log(error)})
  }, []);

  
    const deleteTitle = (id) => {
      axios
        .delete("http://localhost:5000/titles/" + id)
        .then((result) => console.log("result: " + result.data));
        
        setTitles({ titles: titles.filter((el) => el._id !== id) })
    };
  
    // displays titles but does not edit/delete (yet)
  const titleList = () => {
    // console.log(titles);
    return titles.map((currentTitle) => {
      return (
        <Title
          title={currentTitle}
          deleteTitle={currentTitle.deleteTitle}
          key={currentTitle._id}
        />
      );
    });
  };

  return (
    <div>
      <h3>Logged Titles</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Title</th>
            <th>Year</th>
            <th>Date Added</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <div>
        {titles.map((item) => (
          <div key={item.description}>{item.description}</div>
        ))}
      </div>
      <tbody>{titleList()}</tbody>
    </div>
  );
};

export default TitlesList;
