import React, {useState} from 'react';
import UserTable from "./Componentes/UserTable";

function App() {

  const userData = [
    {id: 1, name: 'Tania', username: 'floppydiskette'},
    {id: 2, name: 'Sara', username: 'saraconors'},
    {id: 3, name: 'Eli', username: 'elisistemas'},
    {id: 4, name: 'Vero', username: 'veritosistemas'},
    {id: 5, name: 'Jesus', username: 'jesussistemas'}
  ]

  const [user, setUser] = useState(userData);

  return (
    <div className="container">
      <h1>Proyecto Operaciones CRUD</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>ADD USER</h2>
        </div>
        <div className="flex-large">
          <h2>VIEW USERS</h2>
          <UserTable users={user}/>
        </div>
      </div>
    </div>
  );
}

export default App;
