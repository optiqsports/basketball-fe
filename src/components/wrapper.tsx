import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import MatchPage from '../pages/tournaments/Match'
import PlayerDetails from '../pages/tournaments/PlayerDetails'
import Navbar from './navbar'
import Sidebar from './sidbar'
import Dashboard from '../pages/dashboard/dashboard'
import StartNew from '../pages/StartNew/StartNew'
import Teams from '../pages/StartNew/Teams'
import Players from '../pages/StartNew/Players'
import TeamOverview from '../pages/StartNew/TeamOverview'
import Complete from '../pages/StartNew/Complete'
import TournamentsListing from '../pages/tournaments/TournamentsListing'
import Tournaments from '../pages/tournaments/Tournaments'

const Wrapper: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Determine active menu item based on current route
  const getActiveItem = () => {
    const path = location.pathname;
    if (path === '/dashboard' || path === '/') return 'dashboard';
    if (path.startsWith('/start-new')) return 'start-new';
    if (path.startsWith('/tournaments')) return 'tournaments';
    if (path.startsWith('/results')) return 'results';
    if (path.startsWith('/statisticians')) return 'statisticians';
    return '';
  };

  return (
    <div className="h-screen bg-gray-50 overflow-hidden flex flex-col">
      {/* Navbar - Full Width at Top */}
      <Navbar 
        userName="Ibrahim Maina" 
        userRole="Administrator" 
        onMenuClick={toggleSidebar}
      />

      {/* Main Layout - Sidebar and Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Below navbar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-30 top-20
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <Sidebar activeItem={getActiveItem()} onNavigate={toggleSidebar} />
        </div>

        {/* Mobile overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-transparent z-20 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Page Content - Scrollable with Routes */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/start-new" element={<StartNew />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/players" element={<Players />} />
            <Route path="/team-overview" element={<TeamOverview />} />
            <Route path="/complete" element={<Complete />} />
            <Route path="/tournaments" element={<TournamentsListing />} />
            <Route path="/tournaments/:id" element={<Tournaments />} />
            <Route path="/tournaments/:id/match/:matchId" element={<MatchPage />} />
            <Route path="/tournaments/:id/match/:matchId/player/:playerId" element={<PlayerDetails />} />
            <Route path="/results" element={<div className="p-8"><h1 className="text-2xl font-bold">Results</h1></div>} />
            <Route path="/statisticians" element={<div className="p-8"><h1 className="text-2xl font-bold">Statisticians</h1></div>} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Wrapper;
