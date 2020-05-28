import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username };
    axios
      .post("http://localhost:5000/users/add", newUser)
      .then((res) => console.log(res.data));
  };

  // TODO (YEA!): EDIT OR UPDATE CURRENT USER, PASSWORD?
  // onChangeUsername(e) {
  //   setUpdateUsername({e.target.value})
  // }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>
          Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
        <div className="form-group">
        <input type="submit" value="create user" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
