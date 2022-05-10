import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const UserDetail = (props: any) => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    console.log(props);
    const response = await axios.get(`/api/user/${id}`);
    setUser(response.data.user);
  };
  return (
    <div>
      <h1>User詳細ページ</h1>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetail;
