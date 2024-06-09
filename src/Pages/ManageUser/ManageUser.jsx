import { useState, useEffect } from 'react';
import axios from 'axios';

const ManageUserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://ideabattle-server.vercel.app/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      await axios.put(`https://ideabattle-server.vercel.app/users/${userId}/role`, { role: newRole });
      fetchUsers();
    } catch (error) {
      console.error('Failed to update role:', error);
    }
  };

  const handleStatusChange = async (userId, newStatus) => {
    try {
      await axios.put(`https://ideabattle-server.vercel.app/users/${userId}/status`, { status: newStatus });
      fetchUsers();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://ideabattle-server.vercel.app/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  return (
    <div className='overflow-auto w-full'>
      <table className='border-collapse w-full'>
        <thead>
          <tr className='p-2 border border-gray-500'>
            <th className='p-2 border border-gray-500'>Email</th>
            <th className='p-2 border border-gray-500'>Name</th>
            <th className='p-2 border border-gray-500'>Role</th>
            <th className='p-2 border border-gray-500'>Status</th>
            <th className='p-2 border border-gray-500'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr className='p-2 border border-gray-500' key={user._id}>
              <td className='p-2 border border-gray-500'>{user.email}</td>
              <td className='p-2 border border-gray-500'>{user.username}</td>
              <td className='p-2 border border-gray-500'>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="contest_creator">Contest Creator</option>
                  <option value="user">User</option>
                </select>
              </td>
              <td className='p-2 border border-gray-500'>
                <select
                  value={user.status}
                  onChange={(e) => handleStatusChange(user._id, e.target.value)}
                >
                  <option value="active">Active</option>
                  <option value="blocked">Blocked</option>
                </select>
              </td>
              <td className='p-2 border border-gray-500'>
                <button className='btn' onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUserPage;
