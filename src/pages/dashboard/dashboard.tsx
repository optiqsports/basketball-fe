import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Icons
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

const PlusCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="8" x2="12" y2="16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="8" y1="12" x2="16" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2}/>
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} strokeLinecap="round"/>
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} strokeLinecap="round"/>
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2}/>
  </svg>
);

const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
  </svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
  </svg>
);

const BasketballDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const upNextGames = [
    { id: 1, tournamentId: 1, teamA: 'TEAM A', teamB: 'TEAM B', venue: 'Match Venue', time: '12:40PM, 11 November 2025' },
    { id: 2, tournamentId: 1, teamA: 'TEAM C', teamB: 'TEAM D', venue: 'Match Venue', time: '2:00PM, 11 November 2025' },
    { id: 3, tournamentId: 1, teamA: 'TEAM E', teamB: 'TEAM F', venue: 'Match Venue', time: '4:30PM, 11 November 2025' },
  ];

  const recentGames = [
    { id: 4, tournamentId: 1, teamA: 'TEAM A', scoreA: 120, teamB: 'TEAM B', scoreB: 98, venue: 'Match Venue', time: '12:40PM, 11 November 2025' },
    { id: 5, tournamentId: 1, teamA: 'TEAM A', scoreA: 120, teamB: 'TEAM B', scoreB: 98, venue: 'Match Venue', time: '12:40PM, 11 November 2025' },
    { id: 6, tournamentId: 1, teamA: 'TEAM A', scoreA: 120, teamB: 'TEAM B', scoreB: 98, venue: 'Match Venue', time: '12:40PM, 11 November 2025' },
    { id: 7, tournamentId: 1, teamA: 'TEAM A', scoreA: 120, teamB: 'TEAM B', scoreB: 98, venue: 'Match Venue', time: '12:40PM, 11 November 2025' },
  ];

  const tournaments = [
    { name: 'KCBL Club championship', location: 'Kaduna, NG', status: 'TBA' },
    { name: 'KCBL Club championship', location: 'Kaduna, NG', status: 'TBA' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upNextGames.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + upNextGames.length) % upNextGames.length);
  };

  const handleStartNew = () => {
    navigate('/start-new');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl text-gray-700">
            Welcome back <span className="font-bold text-gray-900">Ibrahim</span>
          </h1>
          <button
            onClick={handleStartNew}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            <PlusCircleIcon className="w-5 h-5" />
            <span>Start New</span>
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Ongoing Game */}
            <div 
              className="bg-white rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate('/tournaments/1/match/1')}
            >
              <h2 className="text-sm font-semibold text-gray-700 mb-4">Ongoing Game</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center">
                    <img src="/ball1.png" alt="Basketball" style={{ width: '35px', height: '35px' }} className="object-contain" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">TEAM A</div>
                    <div className="text-3xl font-bold text-gray-900">17</div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400 font-medium">VS</div>
                
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1 text-right">TEAM B</div>
                    <div className="text-3xl font-bold text-gray-900">12</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src="/ball2.png" alt="Basketball" style={{ width: '35px', height: '35px' }} className="object-contain" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-400">
                Tournament Name | 12:40PM, 11 November 2025
              </div>
            </div>

            {/* Up Next Carousel */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-semibold text-gray-700">Up Next</h2>
                <button className="text-xs text-blue-600 hover:underline">Tournament Name</button>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={prevSlide}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>

                  <div 
                    className="flex-1 mx-4 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => navigate(`/tournaments/${upNextGames[currentSlide].tournamentId}/match/${upNextGames[currentSlide].id}`)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center">
                          <img src="/ball1.png" alt="Basketball" style={{ width: '35px', height: '35px' }} className="object-contain" />
                        </div>
                        <div className="text-sm text-gray-600">{upNextGames[currentSlide].teamA}</div>
                      </div>
                      
                      <div className="text-xs text-gray-400 font-medium">VS</div>
                      
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-gray-600">{upNextGames[currentSlide].teamB}</div>
                        <div className="flex items-center justify-center">
                          <img src="/ball2.png" alt="Basketball" style={{ width: '35px', height: '35px' }} className="object-contain" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-400">
                      {upNextGames[currentSlide].venue} | {upNextGames[currentSlide].time}
                    </div>
                  </div>

                  <button 
                    onClick={nextSlide}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-1.5 mt-4">
                  {upNextGames.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        idx === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Up Coming Tournaments */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-semibold text-gray-700">Upcoming Tournament / Leagues</h2>
                <button className="text-xs text-blue-600 hover:underline">View All</button>
              </div>
              
              <div className="space-y-3">
                {tournaments.map((tournament, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <img 
                      src="/club.png" 
                      alt="Tournament" 
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm mb-1">{tournament.name}</div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <LocationIcon className="w-3 h-3" />
                          {tournament.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-3 h-3" />
                          {tournament.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* New Game Setup Card */}
            <div 
              className="rounded-2xl p-6 shadow-lg relative overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #9BD9E6 -102.62%, #93D0E1 -73.81%, #80B7D5 -23.41%, #608FC1 36.59%, #3559A6 108.59%, #21409A 137.39%)'
              }}
            >
              <div className="relative z-10">
                <div className="text-xs text-white/80 font-medium mb-2">New Game setup</div>
                <h3 className="text-lg text-white font-semibold mb-4">
                  Start a new tournament, league, or<br />friendly competition
                </h3>
                <button 
                  onClick={handleStartNew}
                  className="bg-white text-[#3F3F3F] px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
                >
                  Game Setup
                </button>
              </div>
              
              {/* Basketball Trophy Illustration */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[262px] h-[262px]">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="/champ.png" 
                      alt="Trophy" 
                      className="w-[262px] h-[262px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Games */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-semibold text-gray-700">Recent Games</h2>
                <button className="text-xs text-blue-600 hover:underline">View All</button>
              </div>
              
              <div className="space-y-3">
                {recentGames.map((game, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gray-50 rounded-xl p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => navigate(`/tournaments/${game.tournamentId}/match/${game.id}`)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center">
                          <img src="/ball1.png" alt="Basketball" style={{ width: '35px', height: '35px' }} className="object-contain" />
                        </div>
                        <span className="text-sm text-gray-600">{game.teamA} - <span className="font-semibold text-gray-900">{game.scoreA}</span></span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center">
                          <img src="/ball2.png" alt="Basketball" style={{ width: '35px', height: '35px' }} className="object-contain" />
                        </div>
                        <span className="text-sm text-gray-600">{game.teamB} - <span className="font-semibold text-gray-900">{game.scoreB}</span></span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 border-t border-gray-200 pt-2">
                      <div>{game.venue}</div>
                      <div>{game.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketballDashboard;