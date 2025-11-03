import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Copy Icon Component
const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface Statistician {
  id: number;
  name: string;
  surname: string;
  location: string;
  image: string;
}

const PendingGames: React.FC = () => {
  const { id, matchId } = useParams();
  const navigate = useNavigate();
  const [matchCode] = useState('ABC123XYZ');
  const [selectedStatistician, setSelectedStatistician] = useState('');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(matchCode);
    alert('Match code copied!');
  };

  const statisticians: Statistician[] = [
    { id: 1, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/avatar1.png' },
    { id: 2, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/avatar2.png' },
    { id: 3, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/avatar3.png' },
    { id: 4, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/avatar4.png' },
    { id: 5, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/avatar5.png' },
    { id: 6, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/avatar6.png' },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back and Copy Match Code */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2 cursor-pointer"
          >
            <span>←</span> Back
          </button>
          <button 
            onClick={handleCopyCode}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
          >
            <span>Copy Match Code</span>
            <CopyIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Teams Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 mb-6">
          <div className="flex items-center justify-center gap-8 mb-4">
            {/* Team A */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg">
                <img src="/ball1.png" alt="Team A" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xl font-semibold text-gray-800">TEAM A</span>
            </div>

            {/* VS */}
            <span className="text-lg font-medium text-gray-500">VS</span>

            {/* Team B */}
            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold text-gray-800">TEAM B</span>
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                <img src="/ball2.png" alt="Team B" className="w-8 h-8 object-contain" />
              </div>
            </div>
          </div>

          {/* Tournament Info */}
          <div className="text-center text-sm text-gray-500 mb-8">
            <p>Tournament Name | 12:40PM, 11 November 2025</p>
          </div>
        </div>

                  {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-[#21409A] rounded-lg p-6 text-center" style={{ width: '100px' }}>
              <div className="text-xs text-white mb-2">Day(s)</div>
              <div className="text-4xl font-bold text-white">1</div>
            </div>
            <div className="bg-[#21409A] rounded-lg p-6 text-center" style={{ width: '100px' }}>
              <div className="text-xs text-white mb-2">Hour(s)</div>
              <div className="text-4xl font-bold text-white">8</div>
            </div>
            <div className="bg-[#21409A] rounded-lg p-6 text-center" style={{ width: '100px' }}>
              <div className="text-xs text-white mb-2">Minute(s)</div>
              <div className="text-4xl font-bold text-white">2</div>
            </div>
            <div className="bg-[#21409A] rounded-lg p-6 text-center" style={{ width: '100px' }}>
              <div className="text-xs text-white mb-2">Second(s)</div>
              <div className="text-4xl font-bold text-white">60</div>
            </div>
          </div>

          {/* Jump Ball Text */}
          <div className="text-center text-gray-600 font-medium mb-10">
            To Jump ball
          </div>


        {/* Assign Statistician Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          {/* Dropdown */}
          <div className="mb-6">
            <select 
              value={selectedStatistician}
              onChange={(e) => setSelectedStatistician(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="">Assign Statistician</option>
              {statisticians.map((stat) => (
                <option key={stat.id} value={stat.id}>
                  {stat.name} {stat.surname} - {stat.location}
                </option>
              ))}
            </select>
          </div>

          {/* Available Statisticians */}
          <div className="mb-4">
            <p className="text-center text-sm text-gray-600 mb-6">Statistician available in Kaduna</p>
          </div>

          {/* Statisticians Grid */}
          <div className="grid grid-cols-3 gap-6">
            {statisticians.map((stat) => (
              <div 
                key={stat.id} 
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                onClick={() => setSelectedStatistician(stat.id.toString())}
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={stat.image} 
                    alt={`${stat.name} ${stat.surname}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/48';
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {stat.name} {stat.surname}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>📍</span>
                    <span className="truncate">{stat.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingGames;
