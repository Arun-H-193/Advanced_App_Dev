import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import image from '../../assets/images/logo.png';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const sidebarLinks = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard',
    },
    {
      title: 'Courses',
      path: '/admin/courses',
    },
    {
      title: 'Institutes',
      path: '/admin/institutes',
    },
    {
      title: 'Students',
      path: '/admin/students',
    },
  ];

  return (
    <div className="bg-gray-200 h-screen w-1/6 p-4">
      <img className="mb-[50px]" src={image} alt="image" />
      <h2 className="text-4xl font-semibold mb-4">Admin Dashboard</h2>
      <ul className="flex flex-col gap-2">
        {sidebarLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="p-4 hover:bg-gray-300 font-bold flex items-center gap-2 rounded-md"
          >
            {link.title}
          </NavLink>
        ))}
      </ul>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold w-full h-10 mt-4 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
