import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

interface Player {
  id: number;
  no: string;
  name: string;
  height: string;
  position: string;
  age: string;
  captain: boolean;
}

interface TeamPlayers {
  id: number;
  teamName: string;
  isExpanded: boolean;
  players: Player[];
}

const Players: React.FC = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState<TeamPlayers[]>([
    {
      id: 1,
      teamName: 'Team Name',
      isExpanded: true,
      players: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        no: '',
        name: '',
        height: 'H',
        position: 'F',
        age: '17',
        captain: i === 1, // Second player is captain by default
      })),
    },
    {
      id: 2,
      teamName: 'Team Name',
      isExpanded: false,
      players: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        no: '',
        name: '',
        height: 'H',
        position: 'F',
        age: '17',
        captain: false,
      })),
    },
  ]);

  const addTeam = () => {
    const newTeam: TeamPlayers = {
      id: teams.length + 1,
      teamName: 'Team Name',
      isExpanded: false,
      players: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        no: '',
        name: '',
        height: 'H',
        position: 'F',
        age: '17',
        captain: false,
      })),
    };
    setTeams([...teams, newTeam]);
  };

  const toggleTeam = (id: number) => {
    setTeams(teams.map(team => 
      team.id === id ? { ...team, isExpanded: !team.isExpanded } : team
    ));
  };

  const updatePlayer = (teamId: number, playerId: number, field: keyof Player, value: any) => {
    setTeams(teams.map(team => 
      team.id === teamId 
        ? {
            ...team,
            players: team.players.map(player =>
              player.id === playerId ? { ...player, [field]: value } : player
            ),
          }
        : team
    ));
  };

  const toggleCaptain = (teamId: number, playerId: number) => {
    setTeams(teams.map(team => 
      team.id === teamId 
        ? {
            ...team,
            players: team.players.map(player =>
              player.id === playerId 
                ? { ...player, captain: !player.captain }
                : { ...player, captain: false } // Only one captain per team
            ),
          }
        : team
    ));
  };

  const handleDiscard = () => {
    console.log('Form discarded');
    navigate('/teams');
  };

  const handleSaveNext = () => {
    console.log('Players saved:', teams);
    navigate('/team-overview');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-3">Players</h1>
          <div className="flex gap-2">
            <div className="w-24 h-1 bg-green-500"></div>
            <div className="w-16 h-1 bg-green-500"></div>
            <div className="w-20 h-1 bg-green-500"></div>
          </div>
        </div>

        {/* Teams List */}
        <div className="space-y-4 mb-6">
          {teams.map((team) => (
            <div key={team.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Team Header */}
              <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors bg-gray-100"
                onClick={() => toggleTeam(team.id)}
              >
                <h3 className="text-base font-medium text-gray-800">
                  Team {team.id} - {team.teamName}
                </h3>
                {team.isExpanded ? (
                  <FiChevronUp className="text-gray-600 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-600 text-xl" />
                )}
              </div>

              {/* Players Table - Collapsible */}
              {team.isExpanded && (
                <div className="px-6 pb-6 pt-4">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-3 mb-3 pb-2 border-b border-gray-200">
                    <div className="col-span-1 text-sm font-medium text-gray-600">NO</div>
                    <div className="col-span-4 text-sm font-medium text-gray-600">Player Name</div>
                    <div className="col-span-2 text-sm font-medium text-gray-600">Height</div>
                    <div className="col-span-2 text-sm font-medium text-gray-600">Position</div>
                    <div className="col-span-1 text-sm font-medium text-gray-600">Age</div>
                    <div className="col-span-2 text-sm font-medium text-gray-600">Captain</div>
                  </div>

                  {/* Player Rows */}
                  <div className="space-y-3">
                    {team.players.map((player) => (
                      <div key={player.id} className="grid grid-cols-12 gap-3 items-center">
                        {/* NO */}
                        <div className="col-span-1">
                          <input
                            type="text"
                            placeholder="NO."
                            value={player.no}
                            onChange={(e) => updatePlayer(team.id, player.id, 'no', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm"
                          />
                        </div>

                        {/* Player Name */}
                        <div className="col-span-4">
                          <input
                            type="text"
                            placeholder="Name Surname"
                            value={player.name}
                            onChange={(e) => updatePlayer(team.id, player.id, 'name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm"
                          />
                        </div>

                        {/* Height */}
                        <div className="col-span-2">
                          <input
                            type="text"
                            value={player.height}
                            onChange={(e) => updatePlayer(team.id, player.id, 'height', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm text-center"
                          />
                        </div>

                        {/* Position */}
                        <div className="col-span-2">
                          <input
                            type="text"
                            value={player.position}
                            onChange={(e) => updatePlayer(team.id, player.id, 'position', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm text-center"
                          />
                        </div>

                        {/* Age */}
                        <div className="col-span-1">
                          <input
                            type="text"
                            value={player.age}
                            onChange={(e) => updatePlayer(team.id, player.id, 'age', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm text-center"
                          />
                        </div>

                        {/* Captain */}
                        <div className="col-span-2 flex justify-center">
                          <button
                            onClick={() => toggleCaptain(team.id, player.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              player.captain
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-600 border border-gray-300'
                            }`}
                          >
                            C
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center gap-3">
          <button
            onClick={handleDiscard}
            className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Discard
          </button>
          <div className="flex gap-3">
            <button
              onClick={addTeam}
              className="px-6 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Add Team
            </button>
            <button
              onClick={handleSaveNext}
              className="px-6 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Save & Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
