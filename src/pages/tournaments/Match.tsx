import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

interface QuarterScore {
  q1: number;
  q2: number;
  q3: number;
  q4: number;
}

interface Player {
  id: number;
  name: string;
  surname: string;
  number: string;
  image: string;
  points: number;
  team: string;
}

type LeaderCategory = 'points' | 'rebounds' | 'assists' | 'block' | 'steals';

const GameScorePage: React.FC = () => {
  const { id, matchId } = useParams<{ id: string; matchId: string }>();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<LeaderCategory>('points');
  const [showBoxScore, setShowBoxScore] = useState(false);
  const [activeTeam, setActiveTeam] = useState<'A' | 'B'>('A');

  const teamAScore: QuarterScore = { q1: 17, q2: 0, q3: 0, q4: 0 };
  const teamBScore: QuarterScore = { q1: 17, q2: 0, q3: 0, q4: 0 };

  const totalScoreA = teamAScore.q1 + teamAScore.q2 + teamAScore.q3 + teamAScore.q4;
  const totalScoreB = teamBScore.q1 + teamBScore.q2 + teamBScore.q3 + teamBScore.q4;

  const players: Player[] = [
    { id: 1, name: 'Name', surname: 'Surname', number: '11', image: '/player1.png', points: 25, team: 'yellow' },
    { id: 2, name: 'Name', surname: 'Surname', number: '23', image: '/player2.png', points: 22, team: 'blue' },
  ];

  const handleViewBoxScore = () => {
    setShowBoxScore(true);
  };

  const handlePlayerClick = (playerId: number) => {
    navigate(`/tournaments/${id}/match/${matchId}/player/${playerId}`);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Competition Name</h1>
          <p className="text-sm text-gray-600 mt-3">Tournament Round</p>
        </div>

        {/* Score Display */}
        <div className="rounded-lg shadow-sm p-20 mb-6 border" style={{ background: '#FCFEFF', border: '1px solid #A9A9A91A' }}>
          <div className="flex items-center justify-evenly gap-12 mb-6">
            {/* Team A */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-[#FFCA69] rounded-xl flex items-center justify-evenly p-2">
                <img 
                className="w-32" 
                src="/ball1.png"
                alt="Team A"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="text-4xl text-gray-400">TEAM A</div>
                <div className="text-5xl font-bold text-gray-900">{totalScoreA}</div>
              </div>
            </div>
            
            {/* Quarter */}
            <div className="px-10 py-2 bg-gray-100 rounded-lg">
              <div className="text-sm font-medium text-gray-400">Q1</div>
            </div>
            
            {/* Team B */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="text-5xl font-bold text-gray-900">{totalScoreB}</div>
                <div className="text-4xl text-gray-400">TEAM B</div>
              </div>
              <div className="w-14 h-14 bg-[#80B7D5] rounded-xl flex items-center justify-evenly p-2">
                <img 
                className="w-32" 
                src="/ball2.png"
                alt="Team B"
                />
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400">
            Tournament Name | 12:40PM, 11 November 2025
          </div>
        </div>

        {/* Quarter Scores Table - Hidden when Box Score is shown */}
        {!showBoxScore && (
          <div className="max-w-4xl mx-auto rounded-2xl shadow-sm mb-8 border" style={{ background: '#FCFEFF', border: '1px solid #A9A9A91A' }}>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-bold text-gray-700" style={{ background: '#EEF3FF' }}>Team</th>
                <th className="text-center py-3 px-4 text-sm font-bold text-gray-700" style={{ background: '#EEF3FF' }}>Q1</th>
                <th className="text-center py-3 px-4 text-sm font-bold text-gray-700" style={{ background: '#EEF3FF' }}></th>
                <th className="text-center py-3 px-4 text-sm font-bold text-gray-700" style={{ background: '#EEF3FF' }}>Q2</th>
                <th className="text-center py-3 px-4 text-sm font-bold text-gray-700" style={{ background: '#EEF3FF' }}></th>
                <th className="text-center py-3 px-4 text-sm font-bold text-gray-700" style={{ background: '#EEF3FF' }}>Q3</th>
                <th className="text-center py-3 px-4 text-sm font-bold text-gray-700" style={{ background: '#EEF3FF' }}></th>
                <th className="text-center py-3 px-4 text-sm font-bold text-gray-700" style={{ background: '#EEF3FF' }}>Q4</th>
                </tr>
            </thead>
            <tbody>
               <tr>
                 <td className="py-4 px-4">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-[#FFCA69] rounded-lg flex items-center justify-center">
                       <img src="/ball1.png" alt="Team A" className="w-5 h-5" />
                     </div>
                     <span className="text-sm font-medium text-gray-700">TEAM A</span>
                   </div>
                 </td>
                 <td className="text-center py-4 px-4 text-sm font-semibold">{teamAScore.q1}</td>
                 <td className="text-center py-4 px-2 text-sm font-semibold text-[#A9A9A9]">|</td>
                 <td className="text-center py-4 px-4 text-sm font-semibold text-gray-900">{teamAScore.q2}</td>
                 <td className="text-center py-4 px-2 text-sm font-semibold text-[#A9A9A9]">|</td>
                 <td className="text-center py-4 px-4 text-sm font-semibold text-gray-900">{teamAScore.q3}</td>
                 <td className="text-center py-4 px-2 text-sm font-semibold text-[#A9A9A9]">|</td>
                 <td className="text-center py-4 px-4 text-sm font-semibold text-gray-900">{teamAScore.q4}</td>
               </tr>
               <tr>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#80B7D5] rounded-lg flex items-center justify-center">
                      <img src="/ball2.png" alt="Team B" className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">TEAM B</span>
                  </div>
                </td>
                 <td className="text-center py-4 px-4 text-sm font-semibold">{teamBScore.q1}</td>
                 <td className="text-center py-4 px-2 text-sm font-semibold text-[#A9A9A9]">|</td>
                 <td className="text-center py-4 px-4 text-sm font-semibold text-gray-900">{teamBScore.q2}</td>
                 <td className="text-center py-4 px-2 text-sm font-semibold text-[#A9A9A9]">|</td>
                 <td className="text-center py-4 px-4 text-sm font-semibold text-gray-900">{teamBScore.q3}</td>
                 <td className="text-center py-4 px-2 text-sm font-semibold text-[#A9A9A9]">|</td>
                 <td className="text-center py-4 px-4 text-sm font-semibold text-gray-900">{teamBScore.q4}</td>
              </tr>
            </tbody>
          </table>
        </div>
        )}

        {/* Game Leaders Section - Hidden when Box Score is shown */}
        {!showBoxScore && (
          <div className="max-w-4xl mx-auto rounded-lg shadow-sm p-6 border" style={{ background: '#FCFEFF', border: '1px solid #A9A9A91A' }}>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Game Leaders</h2>

            {/* Category Tabs */}
            <div className="flex gap-2 mb-6 justify-center">
              <button
                onClick={() => setActiveCategory('points')}
                className={`px-5 py-2 rounded-lg font-medium transition-all text-sm ${
                  activeCategory === 'points'
                    ? 'bg-[#21409A] text-[#F8F8F8]'
                    : 'bg-[#F8F8F8] text-gray-600 border border-gray-200'
                }`}
              >
                Points
              </button>
              <button
                onClick={() => setActiveCategory('rebounds')}
                className={`px-5 py-2 rounded-lg font-medium transition-all text-sm ${
                  activeCategory === 'rebounds'
                    ? 'bg-[#21409A] text-[#F8F8F8]'
                    : 'bg-[#F8F8F8] text-gray-600 border border-gray-200'
                }`}
              >
                Rebounds
              </button>
              <button
                onClick={() => setActiveCategory('assists')}
                className={`px-5 py-2 rounded-lg font-medium transition-all text-sm ${
                  activeCategory === 'assists'
                    ? 'bg-[#21409A] text-[#F8F8F8]'
                    : 'bg-[#F8F8F8] text-gray-600 border border-gray-200'
                }`}
              >
                Assists
              </button>
              <button
                onClick={() => setActiveCategory('block')}
                className={`px-5 py-2 rounded-lg font-medium transition-all text-sm ${
                  activeCategory === 'block'
                    ? 'bg-[#21409A] text-[#F8F8F8]'
                    : 'bg-[#F8F8F8] text-gray-600 border border-gray-200'
                }`}
              >
                Block
              </button>
              <button
                onClick={() => setActiveCategory('steals')}
                className={`px-5 py-2 rounded-lg font-medium transition-all text-sm ${
                  activeCategory === 'steals'
                    ? 'bg-[#21409A] text-[#F8F8F8]'
                    : 'bg-[#F8F8F8] text-gray-600 border border-gray-200'
                }`}
              >
                Steals
              </button>
            </div>

            {/* Player Cards */}
            <div className="flex gap-[23px] mb-6" style={{ marginTop: '42px', marginLeft: '80px' }}>
              {players.map((player) => (
                <div
                  key={player.id}
                  className={`rounded-2xl overflow-hidden ${
                    player.team === 'yellow' ? 'bg-[#FFCA69]' : 'bg-[#80B7D5]'
                  }`}
                  style={{ width: '335px', height: '374px' }}
                >
                  <div className="p-4">
                    <div className="text-white font-medium mb-1">{player.name}</div>
                    <div className="text-white font-bold text-lg mb-1">{player.surname}</div>
                    <div className="bg-white text-gray-900 font-bold text-sm px-3 py-1 rounded-md inline-block">
                      {player.number}
                    </div>
                  </div>
                   <div className="relative" style={{ height: '400px' }}>
                     <img
                       src={player.image}
                       alt={`${player.name} ${player.surname}`}
                       className="w-[21rem] ml-0 mx-auto absolute mt-[-3.5rem]"
                     />
                   </div>
                </div>
              ))}
            </div>

            {/* View Box Score Button */}
            <div className="text-center">
              <button
                onClick={handleViewBoxScore}
                className="px-10 py-3 bg-[#21409A] hover:opacity-90 text-white font-medium rounded-lg transition-colors"
              >
                View Box Score
              </button>
            </div>
          </div>
        )}

        {/* Box Score Section - Only shown when Box Score is active */}
        {showBoxScore && (
          <div className="rounded-lg shadow-sm p-6 border" style={{ background: '#FCFEFF', border: '1px solid #A9A9A91A' }}>
            {/* Box Score Header */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Box Score</h2>
                <button
                  onClick={() => setShowBoxScore(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              {/* Team Tabs */}
              <div className="flex justify-center">
                <div className="flex gap-1 bg-gray-100 p-1 rounded-lg w-full max-w-7xl">
                  <button
                    onClick={() => setActiveTeam('A')}
                    className={`flex-1 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                      activeTeam === 'A'
                        ? 'bg-[#21409A] text-white shadow-sm'
                        : 'bg-transparent text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Team A
                  </button>
                  <button
                    onClick={() => setActiveTeam('B')}
                    className={`flex-1 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                      activeTeam === 'B'
                        ? 'bg-[#21409A] text-white shadow-sm'
                        : 'bg-transparent text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Team B
                  </button>
                </div>
              </div>
            </div>

            {/* Box Score Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr style={{ background: '#EEF3FF' }}>
                    <th className="text-left py-3 px-3 text-xs font-bold text-blue-900">#</th>
                    <th className="text-left py-3 px-3 text-xs font-bold text-blue-900">PLAYER</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">PTS</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">FG</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">2PT FG</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">3PT FG</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">FT</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">REB</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">OREB</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">DREB</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">AST</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">STL</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">BLK</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">PF</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">TO</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">+/-</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-blue-900">EFF</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6].map((playerNum) => (
                    <tr 
                      key={playerNum}
                      className={`${playerNum % 2 === 1 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 cursor-pointer transition-colors`}
                      onClick={() => handlePlayerClick(playerNum)}
                    >
                      <td className="py-3 px-3 text-sm font-bold text-blue-900">8</td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <img 
                              src="/player1.png" 
                              alt="Player" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm font-bold text-blue-900">Name Surname</span>
                        </div>
                      </td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">
                        <div>3/6</div>
                        <div>(50%)</div>
                      </td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">
                        <div>3/6</div>
                        <div>(50%)</div>
                      </td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">
                        <div>3/6</div>
                        <div>(50%)</div>
                      </td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">
                        <div>3/6</div>
                        <div>(50%)</div>
                      </td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                      <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr style={{ background: '#F5F8FF' }}>
                    <td className="py-3 px-3 text-sm font-bold text-blue-900"></td>
                    <td className="py-3 px-3 text-sm font-bold text-blue-900">Total</td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">
                      <div>3/6</div>
                      <div>(50%)</div>
                    </td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">
                      <div>3/6</div>
                      <div>(50%)</div>
                    </td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">
                      <div>3/6</div>
                      <div>(50%)</div>
                    </td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">
                      <div>3/6</div>
                      <div>(50%)</div>
                    </td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                    <td className="text-center py-3 px-3 text-sm text-gray-700">8</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Coaching Staff Section */}
            <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
              <div className="grid grid-cols-2 gap-8 p-4" style={{ background: '#F8F8F8' }}>
                <div>
                  <div className="text-sm font-bold text-blue-900 mb-2">Coach</div>
                  <div className="text-sm text-gray-700">Name Surname</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-900 mb-2">Assistant(s)</div>
                  <div className="text-sm text-gray-700">Name Surname</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Game Stats Section - Hidden when Box Score is shown */}
        {!showBoxScore && (
          <div className="max-w-4xl mx-auto rounded-lg shadow-sm p-6 border mt-8" style={{ background: '#FCFEFF', border: '1px solid #A9A9A91A' }}>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Game Stats</h2>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-8">
            <button className="px-10 py-2 rounded-lg font-medium text-sm bg-[#21409A] text-white">
              Final
            </button>
            <button className="px-10 py-2 rounded-lg font-medium text-sm bg-[#F8F8F8] text-gray-600 border border-gray-200">
              Q1
            </button>
            <button className="px-10 py-2 rounded-lg font-medium text-sm bg-[#F8F8F8] text-gray-600 border border-gray-200">
              Q2
            </button>
            <button className="px-10 py-2 rounded-lg font-medium text-sm bg-[#F8F8F8] text-gray-600 border border-gray-200">
              Q3
            </button>
            <button className="px-10 py-2 rounded-lg font-medium text-sm bg-[#F8F8F8] text-gray-600 border border-gray-200">
              Q4
            </button>
          </div>
        
        {/* Divider */}
        <hr className="my-16 border-gray-200" />


          {/* Circular Progress Indicators */}
          <div className="flex justify-center gap-16 mb-8">
            {/* Team A FG% */}
            <div className="text-center">
              <div className="relative w-32 h-32 mb-2">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#FFCA69"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset="125.6"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">FG%</div>
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800">50</div>
            </div>

            {/* Team B FG% */}
            <div className="text-center">
              <div className="relative w-32 h-32 mb-2">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#80B7D5"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset="125.6"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">FG%</div>
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800">50</div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-16 w-[45rem] mx-auto border-gray-200" />

          {/* Horizontal Comparison Bars */}
          <div className="space-y-6">
            {/* 3pt Bar */}
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
              {/* Center Label */}
              <div className="px-4">
                <span className="text-sm font-medium text-gray-800 bg-[#F8F8F8] px-3 py-1 rounded shadow-sm">3pt</span>
              </div>
              
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-gray-200 overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2pt Bar */}
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
              {/* Center Label */}
              <div className="px-4">
                <span className="text-sm font-medium text-gray-800 bg-[#F8F8F8] px-3 py-1 rounded shadow-sm">2pt</span>
              </div>
              
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FT Bar */}
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
              {/* Center Label */}
              <div className="px-4">
                <span className="text-sm font-medium text-gray-800 bg-[#F8F8F8] px-3 py-1 rounded shadow-sm">FT</span>
              </div>
              
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Divider */}
        <hr className="my-16 w-[45rem] mx-auto border-gray-200" />
        
         {/* Horizontal Comparison Bars more View */}
           <div className="space-y-6">
             {/* Total rebounds */}
             <div className="text-center mb-4">
               <h3 className="text-sm font-bold text-gray-700">Total rebounds</h3>
             </div>
             <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
             
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-gray-200 overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Offensive rebounds */}
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Offensive rebounds</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Defensive rebounds */}
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Defensive rebounds</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Assists */}
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Assists</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blocks */}
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Blocks</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Steals */}
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Steals</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Turnovers */}
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Turnovers</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Points in the paint */}
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Points in the paint</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Foul - Personal */}
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Foul - Personal</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        {/* Divider */}
        <hr className="my-16 w-[45rem] mx-auto border-gray-200" />

        {/* Additional Team Comparison Bars */}
        <div className="space-y-8">
          {/* Points off turnovers */}
          <div>
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Points off turnovers</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Points from the bench */}
          <div>
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Points from the bench</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second chance points */}
          <div>
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Second chance points</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fast break points */}
          <div>
            <div className="text-center mb-4">
              <h3 className="text-sm font-bold text-gray-700">Fast break points</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Left Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
              {/* Right Progress Bar */}
              <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                  <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Divider */}
         <hr className="my-16 w-[45rem] mx-auto border-gray-200" />

         {/* Additional Team Comparison Bars */}
         <div className="space-y-8">
           {/* Time leading */}
           <div>
             <div className="text-center mb-4">
               <h3 className="text-sm font-bold text-gray-700">Time leading</h3>
             </div>
             <div className="flex items-center justify-center gap-4">
               {/* Left Progress Bar */}
               <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                 <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                   <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                   </div>
                 </div>
               </div>
               {/* Right Progress Bar */}
               <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                 <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                   <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Biggest Lead */}
           <div>
             <div className="text-center mb-4">
               <h3 className="text-sm font-bold text-gray-700">Biggest Lead</h3>
             </div>
             <div className="flex items-center justify-center gap-4">
               {/* Left Progress Bar */}
               <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                 <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                   <div className="h-full w-1/2 bg-[#FFCA69]"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                   </div>
                 </div>
               </div>
               {/* Right Progress Bar */}
               <div className="flex-1 relative" style={{ maxWidth: '290px' }}>
                 <div className="h-4 bg-[#D9D9D9] overflow-hidden relative">
                   <div className="h-full w-1/2 bg-[#80B7D5]"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-[#F8F8F8] text-gray-700 text-xs px-2 py-1 rounded">50%</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>

        </div>
        )}
      </div>
      
      {/* Bottom Spacing */}
      <div className="h-32"></div>
    </div>  
  );
};

export default GameScorePage;