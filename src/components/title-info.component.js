import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TitleInfo = (props) => {
  const [title, setTitle] = useState({});

  useEffect(() => {
    async function getTitle() {
      try {
        const response = await axios.get(`http://localhost:5000/titles/${props.match.params._id}`);
        setTitle(response.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    getTitle();
  }, [props]);

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:5000/titles/${props.match.params._id}`);
      props.history.push("http://localhost:5000/titles");
    } catch (err) {
        console.log("error", err);
    }
  }

  return (
    <div>
      <h2>{title.title}</h2>
      <small>_id: {title._id}</small>
      <p>{title.year}</p>
      <div className="btn-group">
        <Link to={`http://localhost:5000/titles${title._id}/edit`} className="btn btn-primary">
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        <Link to="http://localhost:5000/titles/" className="btn btn-secondary">
          Close
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default TitleInfo;
