import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-blue-600">InfectionGuard</h1>
      </div>
      <nav className="mt-5">
        <ul>
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Dashboard</li>
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Air Quality</li>
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Hand Hygiene</li>
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Alerts</li>
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Settings</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
