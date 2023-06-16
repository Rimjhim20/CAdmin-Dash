import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccessControl = () => {
  const [roles, setRoles] = useState([
    { name: 'Patient', permissions: ['Delete User', 'View/Edit Profile', 'Schedule Appointments', 'View Patients'] },
    { name: 'Staff', permissions: ['Delete User', 'View/Edit Profile', 'Schedule Appointments', 'View Patients'] },
    { name: 'Administrator', permissions: ['Delete User', 'View/Edit Profile', 'Schedule Appointments', 'View Patients'] },
  ]);

  const handleRoleChange = (e, userId) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, role: e.target.value, showPermissions: e.target.value === 'Patient' || e.target.value === 'Staff' || e.target.value === 'Administrator' };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleOKClick = (userId) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, showPermissions: false };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleSubmit = () => {
    toast.success('Permissions granted successfully!', {
      position: toast.POSITION.TOP_RIGHT
    });
    // You can perform further actions with the submitted data
  };
  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: '', active: true },
    { id: 2, name: 'Jane Smith', role: '', active: true },
    { id: 3, name: 'Admin User', role: '', active: true },
    { id: 4, name: 'Sarah Johnson', role: '', active: true },
    { id: 5, name: 'Michael Brown', role: '', active: false },
    { id: 6, name: 'Emily Davis', role: '', active: true },
    { id: 7, name: 'David Wilson', role: '', active: true },
    { id: 8, name: 'Olivia Thompson', role: '', active: true },
    { id: 9, name: 'Daniel Anderson', role: '', active: false },
    { id: 10, name: 'Sophia Rodriguez', role: '', active: true },
    { id: 11, name: 'Matthew Martinez', role: '', active: true },
    { id: 12, name: 'Ava Taylor', role: '', active: true },
    { id: 13, name: 'James White', role: '', active: true },
    { id: 14, name: 'Isabella Lee', role: '', active: false },
    { id: 15, name: 'Benjamin Harris', role: '', active: true },
  ]);

  return (
    <>
      <ToastContainer />
      <div className="container bg-white rounded-xl  p-20 mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Members ({users.length})</h1>
        <div className="overflow-x-auto">
          <table className="w-[90%] mx-auto table-auto">
            <thead>
              <tr>
                <th className="p-2 text-left">User Name</th>
                <th className="p-2 text-left">Role</th>
                <th className="p-2 text-left">Expiration Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>
                    <select
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={user.role}
                      onChange={(e) => handleRoleChange(e, user.id)}
                    >
                      <option value="">Select Role</option>
                      {roles.map((role, index) => (
                        <option key={index} value={role.name}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                    {user.role === 'Patient' && user.showPermissions && (
                      <div className="mt-2">
                        {roles.find(role => role.name === 'Patient')?.permissions.map((permission, index) => (
                          <label key={index} className="block">
                            <input
                              type="checkbox"
                              className="mr-2"
                              // Here, you can set the checked value based on user's permissions
                            />
                            {permission}
                          </label>
                        ))}
                        <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
      onClick={() => handleOKClick(user.id)}
    >
                          OK
                        </button>
                      </div>
                    )}

                    {user.role === 'Staff' && user.showPermissions && (
                      <div className="mt-2">
                        {roles.find(role => role.name === 'Staff')?.permissions.map((permission, index) => (
                          <label key={index} className="block">
                            <input
                              type="checkbox"
                              className="mr-2"
                              // Here, you can set the checked value based on user's permissions
                            />
                            {permission}
                          </label>
                        ))}
                        <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
      onClick={() => handleOKClick(user.id)}
    >
                          OK
                        </button>
                      </div>
                    )}

                   {user.role === 'Administrator' && user.showPermissions && (
                      <div className="mt-2">
                        {roles.find(role => role.name === 'Administrator')?.permissions.map((permission, index) => (
                          <label key={index} className="block">
                            <input
                              type="checkbox"
                              className="mr-2"
                              // Here, you can set the checked value based on user's permissions
                            />
                            {permission}
                          </label>
                        ))}
                        <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
      onClick={() => handleOKClick(user.id)}
    >
                          OK
                        </button>
                      </div>
                    )}
                  </td>
                  <td>
                    <input
                      type="date"
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td>
                    <button
                      className="text-red-500 hover:text-red-600 focus:outline-none"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AccessControl;
