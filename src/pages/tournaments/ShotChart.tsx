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

const ShotChart: React.FC = () => {
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

        {/* Quarter Filters */}
        <div className="flex justify-center gap-3 mb-6">
          <button className="px-6 py-2.5 rounded-lg font-medium bg-[#21409A] text-white shadow-md cursor-pointer">
            All
          </button>
          <button className="px-6 py-2.5 rounded-lg font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 cursor-pointer">
            Q1
          </button>
          <button className="px-6 py-2.5 rounded-lg font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 cursor-pointer">
            Q2
          </button>
          <button className="px-6 py-2.5 rounded-lg font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 cursor-pointer">
            Q3
          </button>
          <button className="px-6 py-2.5 rounded-lg font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 cursor-pointer">
            Q4
          </button>
        </div>

        {/* Basketball Court with Shot Chart */}
        <div className="bg-gradient-to-b from-blue-100 to-blue-50 rounded-lg p-8 mb-6 border border-gray-200">
          <div className="bg-[#4A90E2] rounded-lg p-4 max-w-3xl mx-auto relative" style={{ aspectRatio: '16/10' }}>
            {/* Basketball court lines and circles would be SVG overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-sm opacity-50">Basketball Court Diagram</div>
            </div>
            {/* Shot markers would be positioned absolutely based on coordinates */}
          </div>
          
          {/* Legend */}
          <div className="flex justify-center gap-6 mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-[#21409A] focus:ring-[#21409A]" />
              <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
              <span className="text-sm text-gray-700">Made</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-[#21409A] focus:ring-[#21409A]" />
              <span className="text-gray-600 text-lg">✕</span>
              <span className="text-sm text-gray-700">Missed</span>
            </label>
          </div>
        </div>

        {/* Player Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Player 1 - Yellow/Orange */}
          <div className="bg-gradient-to-b from-yellow-300 to-yellow-200 rounded-lg p-6 relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Name</p>
                <p className="text-sm font-medium text-gray-700">Surname</p>
              </div>
              <div className="bg-white rounded px-3 py-1 text-lg font-bold text-gray-800">11</div>
            </div>
            <div className="flex items-end justify-between">
              <div className="bg-white rounded-full px-4 py-2">
                <div className="text-xs text-gray-500">FG%</div>
                <div className="text-sm font-bold text-gray-800">30%</div>
                <div className="text-xs text-gray-500">(8/26)</div>
              </div>
              <div className="w-32 h-32 bg-gray-300 rounded-lg">
                <img src="/player1.png" alt="Player" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
            </div>
          </div>

          {/* Player 2 - Blue */}
          <div className="bg-gradient-to-b from-blue-300 to-blue-200 rounded-lg p-6 relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Name</p>
                <p className="text-sm font-medium text-gray-700">Surname</p>
              </div>
              <div className="bg-white rounded px-3 py-1 text-lg font-bold text-gray-800">23</div>
            </div>
            <div className="flex items-end justify-between">
              <div className="bg-white rounded-full px-4 py-2">
                <div className="text-xs text-gray-500">FG%</div>
                <div className="text-sm font-bold text-gray-800">50%</div>
                <div className="text-xs text-gray-500">(10/20)</div>
              </div>
              <div className="w-32 h-32 bg-gray-300 rounded-lg">
                <img src="/player2.png" alt="Player" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
            </div>
          </div>
        </div>

        {/* Player Selection Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team A Players */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg cursor-pointer hover:bg-yellow-100">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
              <span className="text-sm font-medium text-gray-700">All Players</span>
            </label>
            {[1, 2, 3, 4, 5].map((i) => (
              <label key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
                <span className="text-sm text-gray-700">Name Surname</span>
              </label>
            ))}
          </div>

          {/* Team B Players */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
              <span className="text-sm font-medium text-gray-700">All Players</span>
            </label>
            {[1, 2, 3, 4, 5].map((i) => (
              <label key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                <input type="checkbox" defaultChecked={i === 3} className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                <span className="text-sm text-gray-700">Name Surname</span>
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShotChart;
