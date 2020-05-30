import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TitlesList = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function getTitles() {
      try {
        const response = await axios.get("http://localhost:5000/titles/");
        setTitles(response.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    getTitles();
  }, []);

  return (
    <div>
      <h2>
        Titles
        <Link to="http://localhost:5000/titles/add" className="btn btn-primary float-right">
          Add Title
        </Link>
      </h2>
      <hr />
      {titles.map((title) => {
        return (
          <div key={title._id}>
            <h4>
              <Link to={`/titles/${title._id}`}>{title.title}</Link>
            </h4>
            <small>_id: {title._id}</small>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default TitlesList;
