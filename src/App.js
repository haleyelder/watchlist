import React, { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

const App = () => {
  const initialFormState = { id: null, name: "", username: "" };
  const usersData = [
    { id: 1, name: "haley", username: "comette" },
    { id: 2, name: "john", username: "johndoe" },
    { id: 3, name: "jill", username: "jilldoe" },
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updateUser : user )))
  }

  return (
    <div className="container">
      <h1>crud test</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <div> Edit user</div>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2> add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
      
        <div className="flex-large">
          <h2>view users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
