import React, { useState } from 'react';
import { BiUserPlus, BiEditAlt, BiTrash, BiCheck, BiX } from 'react-icons/bi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Patient', active: true },
    { id: 2, name: 'Jane Smith', role: 'Staff', active: true },
    { id: 3, name: 'Admin User', role: 'Administrator', active: true },
    { id: 4, name: 'Sarah Johnson', role: 'Patient', active: true },
    { id: 5, name: 'Michael Brown', role: 'Staff', active: false },
    { id: 6, name: 'Emily Davis', role: 'Patient', active: true },
    { id: 7, name: 'David Wilson', role: 'Staff', active: true },
    { id: 8, name: 'Olivia Thompson', role: 'Patient', active: true },
    { id: 9, name: 'Daniel Anderson', role: 'Staff', active: false },
    { id: 10, name: 'Sophia Rodriguez', role: 'Patient', active: true },
    { id: 11, name: 'Matthew Martinez', role: 'Administrator', active: true },
    { id: 12, name: 'Ava Taylor', role: 'Patient', active: true },
    { id: 13, name: 'James White', role: 'Staff', active: true },
    { id: 14, name: 'Isabella Lee', role: 'Patient', active: false },
    { id: 15, name: 'Benjamin Harris', role: 'Staff', active: true },
  ]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  // Sorting
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  // Add user
  const [newUser, setNewUser] = useState({ name: '', role: '' });

  // Edit user
  const [editingId, setEditingId] = useState(null);

  // Delete user
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Toggle active status
  const handleToggleActive = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, active: !user.active } : user
    );
    setUsers(updatedUsers);
  };

  // Add user
  const handleAddUser = () => {
    setUsers([...users, { id: Date.now(), ...newUser, active: true }]);
    setNewUser({ name: '', role: '' });
    toast.success('New User Added', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  // Update user
  const handleUpdateUser = (id, field, value) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, [field]: value } : user
    );
    setUsers(updatedUsers);
    setEditingId(null);
  };

  // Handle search
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Sorting
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  // Filter and sort users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortKey) {
      const valueA = a[sortKey];
      const valueB = b[sortKey];
      if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    }
    return 0;
  });

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 md:p-10 rounded-xl shadow-lg">
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Add User</h3>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="User Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <select
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="">Select Role</option>
            <option value="Patient">Patient</option>
            <option value="Staff">Staff</option>
            <option value="Administrator">Administrator</option>
          </select>
          <button
            className="flex-shrink-0 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleAddUser}
          >
            <BiUserPlus size={20} />
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">User List</h3>
        <div>
          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <div className="mb-4 md:mb-0">
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search by name"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div>
              {/* Sort Dropdown */}
              <select
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortKey}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="name">Name</option>
                <option value="role">Role</option>
              </select>
            </div>
          </div>

          {/* User List */}
          {currentUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {editingId === user.id ? (
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={user.name}
                    onChange={(e) => handleUpdateUser(user.id, 'name', e.target.value)}
                  />
                ) : (
                  <span className={user.active ? 'font-bold text-black' : 'line-through text-gray-500'}>
                    {user.name}
                  </span>
                )}
                {editingId === user.id ? (
                  <select
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={user.role}
                    onChange={(e) => handleUpdateUser(user.id, 'role', e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="Patient">Patient</option>
                    <option value="Staff">Staff</option>
                    <option value="Administrator">Administrator</option>
                  </select>
                ) : (
                  <span className="text-sm px-4  text-gray-600">{user.role}</span>
                )}
              </div>
              <div>
                {editingId === user.id ? (
                  <>
                    <button
                      className="mx-1 text-green-500 hover:text-green-600 focus:outline-none"
                      onClick={() => handleUpdateUser(user.id, 'active', true)}
                    >
                      <BiCheck size={20} />
                    </button>
                    <button
                      className="mx-1 text-red-500 hover:text-red-600 focus:outline-none"
                      onClick={() => handleUpdateUser(user.id, 'active', false)}
                    >
                      <BiX size={20} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="mx-1 text-blue-500 hover:text-blue-600 focus:outline-none"
                      onClick={() => setEditingId(user.id)}
                    >
                      <BiEditAlt size={20} />
                    </button>
                    <button
                      className="mx-1 text-red-500 hover:text-red-600 focus:outline-none"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <BiTrash size={20} />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <ul className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`cursor-pointer px-3 py-1 rounded-full ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default UserManagement;
