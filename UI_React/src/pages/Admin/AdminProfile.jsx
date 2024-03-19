import React, { useState } from 'react';
import { PersonCircle } from 'react-bootstrap-icons'; // Import Bootstrap Icon

const AdminProfilePage = () => {
  // Dummy admin data
  const [adminData, setAdminData] = useState({
    name: 'Admin Name',
    email: 'admin@example.com',
    contactNumber: '+1234567890',
  });

  const [editing, setEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleSaveChanges = () => {
    // Add logic to save changes to backend or perform any other action
    setEditing(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8 text-center">
          <div className="flex justify-center">
            {/* Display alternative SVG for profile picture */}
            <PersonCircle size={72} className="text-gray-400" />
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600">{adminData.email}</p>
          </div>
          <div className="border-t border-gray-200 mt-6 pt-6">
            <h2 className="text-lg font-semibold mb-2">Admin Details</h2>
            <div className="flex flex-col space-y-2 justify-center text-center">
              <div className="flex items-center">
                <span className="font-semibold mr-2">Name:</span>
                {editing ? (
                  <input
                    type="text"
                    name="name"
                    value={adminData.name}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-2 py-1 rounded"
                  />
                ) : (
                  <span>{adminData.name}</span>
                )}
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Email:</span>
                <span>{adminData.email}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Contact Number:</span>
                {editing ? (
                  <input
                    type="text"
                    name="contactNumber"
                    value={adminData.contactNumber}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-2 py-1 rounded"
                  />
                ) : (
                  <span>{adminData.contactNumber}</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-center items-center">
          {editing ? (
            <>
              <button onClick={handleSaveChanges} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300 mr-2">
                Save Changes
              </button>
              <button onClick={handleEditToggle} className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-600 transition duration-300">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={handleEditToggle} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;
