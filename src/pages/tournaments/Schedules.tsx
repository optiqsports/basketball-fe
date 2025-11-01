import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Match {
  id: number;
  teamA: string;
  teamAColor: string;
  teamB: string;
  teamBColor: string;
  day: string;
  month: string;
  year: string;
  time: string;
  period: string;
  venue: string;
  matchVenue: string;
  matchDateTime: string;
  isEditing: boolean;
}

const Schedules: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeGroup, setActiveGroup] = useState('A');
  const [activeFilter, setActiveFilter] = useState('all');
  
  const [matches, setMatches] = useState<Match[]>([
    { 
      id: 1, 
      teamA: 'TEAM A', 
      teamAColor: 'yellow', 
      teamB: 'TEAM B', 
      teamBColor: 'blue',
      day: '', 
      month: '', 
      year: '', 
      time: '10:17', 
      period: 'AM', 
      venue: 'Court',
      matchVenue: 'Match Venue',
      matchDateTime: '12:40PM, 11 November 2025',
      isEditing: true
    },
    { 
      id: 2, 
      teamA: 'TEAM A', 
      teamAColor: 'yellow', 
      teamB: 'TEAM B', 
      teamBColor: 'blue',
      day: '', 
      month: '', 
      year: '', 
      time: '10:17', 
      period: 'AM', 
      venue: 'Court',
      matchVenue: 'Match Venue',
      matchDateTime: '12:40PM, 11 November 2025',
      isEditing: false
    },
    { 
      id: 3, 
      teamA: 'TEAM A', 
      teamAColor: 'yellow', 
      teamB: 'TEAM B', 
      teamBColor: 'blue',
      day: '', 
      month: '', 
      year: '', 
      time: '10:17', 
      period: 'AM', 
      venue: 'Court',
      matchVenue: 'Match Venue',
      matchDateTime: '12:40PM, 11 November 2025',
      isEditing: false
    },
  ]);

  const toggleEdit = (matchId: number) => {
    setMatches(matches.map(match => 
      match.id === matchId ? { ...match, isEditing: !match.isEditing } : match
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <span>←</span> Back to Tournament
            </button>
            <button 
              onClick={() => navigate(`/tournaments/${id ?? '1'}/fixtures`)}
              className="text-sm text-[#21409A] hover:underline font-medium"
            >
              Edit Fixture
            </button>
          </div>
          <h1 className="text-3xl font-semibold text-gray-800">Schedule</h1>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-between items-center mb-6">
          {/* Group Tabs */}
          <div className="flex gap-2">
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

          {/* Filter Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#21409A] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All(4)
            </button>
            <button
              onClick={() => setActiveFilter('unplayed')}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeFilter === 'unplayed'
                  ? 'bg-[#21409A] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Unplayed(4)
            </button>
          </div>
        </div>

        {/* Matches List */}
        <div className="space-y-4">
          {matches.map((match) => (
            <div key={match.id} className="bg-[#F8F8F8] rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                {/* Left Side - Teams and Form */}
                <div className="flex-1">
                  {/* Teams */}
                  <div className="space-y-3 mb-6">
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

                  {/* Edit Form - Only show when editing */}
                  {match.isEditing && (
                    <>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        {/* Date */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              placeholder="Day"
                              defaultValue={match.day}
                              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input 
                              type="text" 
                              placeholder="Month"
                              defaultValue={match.month}
                              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input 
                              type="text" 
                              placeholder="Year"
                              defaultValue={match.year}
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
                              placeholder="10:17"
                              defaultValue={match.time}
                              className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-100 text-gray-700">
                              {match.period}
                            </button>
                            <button className="px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700">
                              PM
                            </button>
                          </div>
                        </div>

                        {/* Venue */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Venue</label>
                          <input 
                            type="text" 
                            placeholder="Court"
                            defaultValue={match.venue}
                            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button 
                          onClick={() => toggleEdit(match.id)}
                          className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 font-medium"
                        >
                          Discard
                        </button>
                        <button className="px-6 py-2.5 bg-[#21409A] text-white rounded-lg font-medium hover:bg-blue-800 transition-colors">
                          Save
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Right Side - Match Info and Edit Button */}
                <div className="flex flex-col items-end gap-2">
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{match.matchVenue}</p>
                    <p className="text-xs text-gray-500">{match.matchDateTime}</p>
                  </div>
                  {!match.isEditing && (
                    <button 
                      onClick={() => toggleEdit(match.id)}
                      className="px-4 py-1.5 border border-[#21409A] text-[#21409A] rounded-lg text-sm font-medium hover:bg-blue-50"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedules;
