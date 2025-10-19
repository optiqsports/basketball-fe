import React, { useState } from 'react';

// Basketball Icon Component
const BasketballIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 7H20" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 17H20" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// Copy Icon Component
const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface Team {
  id: number;
  name: string;
  color: string;
  gp: number;
  w: number;
  l: number;
  percent: number;
  points: number;
}

interface Match {
  id: number;
  teamA: string;
  teamAColor: string;
  teamB: string;
  teamBColor: string;
  venue: string;
  time: string;
}

const CompetitionDetailPage: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState('A');
  const [matchCode] = useState('ABC123XYZ');

  const teams: Team[] = [
    { id: 1, name: 'TEAM', color: 'yellow', gp: 0, w: 0, l: 0, percent: 0, points: 0 },
    { id: 2, name: 'TEAM', color: 'yellow', gp: 0, w: 0, l: 0, percent: 0, points: 0 },
    { id: 3, name: 'TEAM', color: 'yellow', gp: 0, w: 0, l: 0, percent: 0, points: 0 },
    { id: 4, name: 'TEAM', color: 'blue', gp: 0, w: 0, l: 0, percent: 0, points: 0 },
    { id: 5, name: 'TEAM', color: 'blue', gp: 0, w: 0, l: 0, percent: 0, points: 0 },
  ];

  const matches: Match[] = [
    { id: 1, teamA: 'TEAM A', teamAColor: 'yellow', teamB: 'TEAM B', teamBColor: 'blue', venue: 'Match Venue', time: '12:40PM, 11 November 2025' },
    { id: 2, teamA: 'TEAM A', teamAColor: 'yellow', teamB: 'TEAM B', teamBColor: 'blue', venue: 'Match Venue', time: '12:40PM, 11 November 2025' },
    { id: 3, teamA: 'TEAM A', teamAColor: 'yellow', teamB: 'TEAM B', teamBColor: 'blue', venue: 'Match Venue', time: '12:40PM, 11 November 2025' },
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(matchCode);
    alert('Match code copied!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Competition Name</h1>
          <div className="w-24 h-1 bg-green-500 mt-2"></div>
        </div>

        {/* Ongoing Game Card */}
        <div className="rounded-lg shadow-sm p-6 mb-6 border" style={{ background: '#FCFEFF', border: '1px solid #A9A9A91A' }}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-semibold text-gray-700">Ongoing Game</h2>
            <button 
              onClick={handleCopyCode}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              <span>Copy Match Code</span>
              <CopyIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <img src="/ball1.png" alt="Basketball" style={{ width: '35px', height: '35px' }} className="object-contain" />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">TEAM A</div>
                <div className="text-4xl font-bold text-gray-900">17</div>
              </div>
            </div>
            
            <div className="text-lg text-gray-400 font-medium">VS</div>
            
            <div className="flex items-center gap-4">
              <div>
                <div className="text-xs text-gray-500 mb-1 text-right">TEAM B</div>
                <div className="text-4xl font-bold text-gray-900">12</div>
              </div>
              <div className="flex items-center justify-center">
                <img src="/ball2.png" alt="Basketball" style={{ width: '35px', height: '35px' }} className="object-contain" />
              </div>
            </div>
          </div>

          <div className="text-center mt-4 text-xs text-gray-400">
            Tournament Name | 12:40PM, 11 November 2025
          </div>
        </div>

        {/* Group Tabs */}
          <div className="flex justify-center gap-2 mb-6">
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Standings Table */}
          <div className="rounded-lg shadow-sm p-6 border" style={{ background: '#FCFEFF', border: '1px solid #A9A9A91A' }}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Group {activeGroup}</h2>
              <p className="text-sm text-gray-500">0/10 Games Played</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Team</th>
                    <th className="text-center py-3 px-2 text-xs font-semibold text-gray-600">GP</th>
                    <th className="text-center py-3 px-2 text-xs font-semibold text-gray-600">W</th>
                    <th className="text-center py-3 px-2 text-xs font-semibold text-gray-600">L</th>
                    <th className="text-center py-3 px-2 text-xs font-semibold text-gray-600">%</th>
                    <th className="text-center py-3 px-2 text-xs font-semibold text-gray-600">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team) => (
                    <tr key={team.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center">
                            <img 
                              src={team.color === 'yellow' ? '/ball1.png' : '/ball2.png'} 
                              alt="Basketball" 
                              style={{ width: '35px', height: '35px' }} 
                              className="object-contain" 
                            />
                          </div>
                          <span className="text-sm text-gray-700">{team.name}</span>
                        </div>
                      </td>
                      <td className="text-center py-3 px-2 text-sm text-gray-700">{team.gp}</td>
                      <td className="text-center py-3 px-2 text-sm text-gray-700">{team.w}</td>
                      <td className="text-center py-3 px-2 text-sm text-gray-700">{team.l}</td>
                      <td className="text-center py-3 px-2 text-sm text-gray-700">{team.percent}</td>
                      <td className="text-center py-3 px-2 text-sm text-gray-700">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Matches List */}
          <div className="space-y-4">
            {matches.map((match) => (
              <div key={match.id} className="rounded-lg shadow-sm p-5 border" style={{ background: '#FCFEFF', border: '1px solid #A9A9A91A' }}>
                <div className="flex justify-between items-start">
                  {/* Teams (left) */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center">
                        <img 
                          src={match.teamAColor === 'yellow' ? '/ball1.png' : '/ball2.png'} 
                          alt="Basketball" 
                          style={{ width: '35px', height: '35px' }} 
                          className="object-contain" 
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{match.teamA}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center">
                        <img 
                          src={match.teamBColor === 'yellow' ? '/ball1.png' : '/ball2.png'} 
                          alt="Basketball" 
                          style={{ width: '35px', height: '35px' }} 
                          className="object-contain" 
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{match.teamB}</span>
                    </div>
                  </div>

                  {/* Venue/Time (right) */}
                  <div className="text-xs text-gray-500 text-right self-center space-y-1">
                    <div>{match.venue}</div>
                    <div>{match.time}</div>
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

export default CompetitionDetailPage;