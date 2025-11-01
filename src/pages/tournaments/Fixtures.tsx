import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Game {
  id: number;
  homeTeam: string;
  awayTeam: string;
  day: string;
  month: string;
  year: string;
  time: string;
  period: string;
  venue: string;
}

const Fixtures: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeGroup, setActiveGroup] = useState('A');
  const [format, setFormat] = useState('Round Robin');
  const [round, setRound] = useState('Group stage');
  
  const [games, setGames] = useState<Game[]>([
    { id: 1, homeTeam: 'TEAM A', awayTeam: 'TEAM A', day: '', month: '', year: '', time: '10-17', period: 'AM', venue: 'Court' },
  ]);

  const addGame = () => {
    setGames([...games, { 
      id: games.length + 1, 
      homeTeam: 'TEAM A', 
      awayTeam: 'TEAM A', 
      day: '', 
      month: '', 
      year: '', 
      time: '', 
      period: 'AM', 
      venue: '' 
    }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800 mb-4 flex items-center gap-2"
          >
            <span>←</span> Back to Tournament
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Fixtures</h1>
        </div>

        {/* Format and Round Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
            <select 
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Round Robin">Round Robin</option>
              <option value="Knockout">Knockout</option>
              <option value="League">League</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Round</label>
            <select 
              value={round}
              onChange={(e) => setRound(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Group stage">Group stage</option>
              <option value="Quarter Finals">Quarter Finals</option>
              <option value="Semi Finals">Semi Finals</option>
              <option value="Finals">Finals</option>
            </select>
          </div>
        </div>

        {/* Group Tabs */}
        <div className="flex gap-2 mb-6">
          {['A', 'B', 'C', 'D'].map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeGroup === group
                  ? 'bg-[#21409A] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Group {group}
            </button>
          ))}
        </div>

        {/* Games List */}
        <div className="space-y-6">
          {games.map((game, index) => (
            <div key={game.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <h3 className="text-base font-semibold text-gray-800">Game {index + 1}</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Home Team */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Home</label>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded">
                      <img src="/ball1.png" alt="Basketball" className="w-7 h-7 object-contain" />
                    </div>
                    <select className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>TEAM A</option>
                      <option>TEAM B</option>
                      <option>TEAM C</option>
                    </select>
                  </div>
                </div>

                {/* Away Team */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Away</label>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded">
                      <img src="/ball2.png" alt="Basketball" className="w-7 h-7 object-contain" />
                    </div>
                    <select className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>TEAM A</option>
                      <option>TEAM B</option>
                      <option>TEAM C</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Date, Time, Venue */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Day"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                      type="text" 
                      placeholder="Month"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                      type="text" 
                      placeholder="Year"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="10-17"
                      defaultValue={game.time}
                      className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select className="px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                  </div>
                </div>

                {/* Venue */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Venue</label>
                  <input 
                    type="text" 
                    placeholder="Court"
                    defaultValue={game.venue}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Collapsed Game Items */}
          {[2, 3, 4].map((num) => (
            <div key={num} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <h3 className="text-base font-medium text-gray-600">Game {num}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <button 
            onClick={addGame}
            className="px-6 py-3 bg-[#21409A] text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Add Game
          </button>
          <button
            onClick={() => navigate('/tournaments')}
            className="px-6 py-3 bg-[#21409A] text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
