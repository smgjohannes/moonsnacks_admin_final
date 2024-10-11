import React, { useState, useEffect } from 'react';
import userService from '../../services/userService';
import Table from '../../components/Table';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAllUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <Table data={users} columns={['Name', 'Email', 'Role']} />
    </div>
  );
};

export default UserList;
