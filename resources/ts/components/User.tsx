import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('/api/user');
    setUsers(response.data.users);
  };

  return (
    <div className='User'>
      <div className='UserContainer'>
        <h1>＜Team-List＞</h1>
        <ul>
          {users.map((user: User) => (
            <li key={user.id}>
              {user.name}
              <Link to={`/user/${user.id}`} className='LinkStyle'>
                詳細
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
