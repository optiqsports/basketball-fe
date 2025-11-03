import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MatchResult {
  id: number;
  teamA: string;
  teamAScore: number;
  teamAColor: string;
  teamB: string;
  teamBScore: number;
  teamBColor: string;
  venue: string;
  datetime: string;
  date: string;
}

const Results: React.FC = () => {
  const navigate = useNavigate();

  const results: MatchResult[] = [
    {
      id: 1,
      teamA: 'TEAM A',
      teamAScore: 120,
      teamAColor: 'yellow',
      teamB: 'TEAM B',
      teamBScore: 98,
      teamBColor: 'blue',
      venue: 'Match Venue',
      datetime: '12:40PM, 11 November 2025',
      date: 'Date'
    },
    {
      id: 2,
      teamA: 'TEAM A',
      teamAScore: 120,
      teamAColor: 'yellow',
      teamB: 'TEAM B',
      teamBScore: 98,
      teamBColor: 'blue',
      venue: 'Match Venue',
      datetime: '12:40PM, 11 November 2025',
      date: 'Date'
    },
    {
      id: 3,
      teamA: 'TEAM A',
      teamAScore: 120,
      teamAColor: 'yellow',
      teamB: 'TEAM B',
      teamBScore: 98,
      teamBColor: 'blue',
      venue: 'Match Venue',
      datetime: '12:40PM, 11 November 2025',
      date: 'Date'
    },
    {
      id: 4,
      teamA: 'TEAM A',
      teamAScore: 120,
      teamAColor: 'yellow',
      teamB: 'TEAM B',
      teamBScore: 98,
      teamBColor: 'blue',
      venue: 'Match Venue',
      datetime: '12:40PM, 11 November 2025',
      date: 'Date'
    },
    {
      id: 5,
      teamA: 'TEAM A',
      teamAScore: 120,
      teamAColor: 'yellow',
      teamB: 'TEAM B',
      teamBScore: 98,
      teamBColor: 'blue',
      venue: 'Match Venue',
      datetime: '12:40PM, 11 November 2025',
      date: 'Date'
    },
    {
      id: 6,
      teamA: 'TEAM A',
      teamAScore: 120,
      teamAColor: 'yellow',
      teamB: 'TEAM B',
      teamBScore: 98,
      teamBColor: 'blue',
      venue: 'Match Venue',
      datetime: '12:40PM, 11 November 2025',
      date: 'Date'
    }
  ];

  // Group results by date
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.date]) {
      acc[result.date] = [];
    }
    acc[result.date].push(result);
    return acc;
  }, {} as Record<string, MatchResult[]>);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Results</h1>
          
        </div>

        {/* Results List */}
        <div className="space-y-8">
          {Object.entries(groupedResults).map(([date, matches], groupIndex) => (
            <div key={groupIndex}>
              {/* Date Header */}
              <h2 className="text-sm font-semibold text-gray-800 mb-4">{date}</h2>
              
              {/* Matches for this date */}
              <div className="space-y-4">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="bg-gray-50 rounded-lg p-5 border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => navigate(`/tournaments/1/match/${match.id}`)}
                  >
                    <div className="flex justify-between items-center">
                      {/* Left side - Teams and Scores */}
                      <div className="space-y-3">
                        {/* Team A */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded">
                            <img
                              src={match.teamAColor === 'yellow' ? '/ball1.png' : '/ball2.png'}
                              alt="Basketball"
                              className="w-7 h-7 object-contain"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700 w-20">{match.teamA}</span>
                          <span className="text-sm font-semibold text-gray-800">- {match.teamAScore}</span>
                        </div>

                        {/* Team B */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded">
                            <img
                              src={match.teamBColor === 'yellow' ? '/ball1.png' : '/ball2.png'}
                              alt="Basketball"
                              className="w-7 h-7 object-contain"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700 w-20">{match.teamB}</span>
                          <span className="text-sm font-semibold text-gray-800">- {match.teamBScore}</span>
                        </div>
                      </div>

                      {/* Right side - Venue and DateTime */}
                      <div className="text-right text-xs text-gray-500">
                        <p>{match.venue}</p>
                        <p>{match.datetime}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
