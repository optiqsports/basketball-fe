import React, { useState } from 'react'
import Navbar from './navbar'
import Sidebar from './sidbar'
import Dashboard from '../pages/dashboard/dashboard'

const Wrapper: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Fixed on the left */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30 
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar activeItem="start-new" />
      </div>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar - Fixed at the top */}
        <Navbar 
          userName="Ibrahim Maina" 
          userRole="Administrator" 
          onMenuClick={toggleSidebar}
        />

        {/* Dashboard Content - Scrollable */}
        <main className="flex-1 overflow-y-auto bg-white">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Wrapper;
