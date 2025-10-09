import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiChevronUp, FiChevronDown, FiPlus } from 'react-icons/fi'

const basketballPositions = [
  'Point Guard',
  'Shooting Guard',
  'Small Forward',
  'Power Forward',
  'Center'
];

interface Player {
  id: number;
  no: string;
  name: string;
  height: string;
  position: string;
  dob: string;
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
      players: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        no: '',
        name: '',
        height: '',
        position: '',
        dob: '',
        captain: i === 0, // First player is captain by default
      })),
    },
    {
      id: 2,
      teamName: 'Team Name',
      isExpanded: false,
      players: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        no: '',
        name: '',
        height: '',
        position: '',
        dob: '',
        captain: false,
      })),
    },
  ]);

  const addTeam = () => {
    const newTeam: TeamPlayers = {
      id: teams.length + 1,
      teamName: 'Team Name',
      isExpanded: false,
      players: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        no: '',
        name: '',
        height: '',
        position: '',
        dob: '',
        captain: false,
      })),
    };
    setTeams([...teams, newTeam]);
  };

  const addPlayer = (teamId: number) => {
    setTeams(teams.map(team => {
      if (team.id === teamId) {
        const newPlayer: Player = {
          id: team.players.length + 1,
          no: '',
          name: '',
          height: '',
          position: '',
          dob: '',
          captain: false,
        };
        return { ...team, players: [...team.players, newPlayer] };
      }
      return team;
    }));
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

  const handlePrevious = () => {
    navigate('/teams');
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
          <div className="flex justify-between items-start mb-3">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-3">Players</h1>
              <div className="flex gap-2">
                <div className="w-24 h-1 bg-green-500"></div>
                <div className="w-16 h-1 bg-green-500"></div>
                <div className="w-20 h-1 bg-green-500"></div>
              </div>
            </div>
            <button
              onClick={addTeam}
              className="flex items-center gap-2 px-6 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <FiPlus className="text-lg" />
              Add Team
            </button>
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
                  {/* Add Player Button - Top Right */}
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={() => addPlayer(team.id)}
                      className="flex items-center gap-2 px-4 py-2 text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
                    >
                      <FiPlus className="text-lg" />
                      Add Player
                    </button>
                  </div>

                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-3 mb-3 pb-2 border-b border-gray-200">
                    <div className="col-span-1 text-sm font-medium text-gray-600 text-center">NO</div>
                    <div className="col-span-3 text-sm font-medium text-gray-600 text-center">Player Name</div>
                    <div className="col-span-2 text-sm font-medium text-gray-600 text-center">Height</div>
                    <div className="col-span-2 text-sm font-medium text-gray-600 text-center">Position</div>
                    <div className="col-span-2 text-sm font-medium text-gray-600 text-center">DOB</div>
                    <div className="col-span-2 text-sm font-medium text-gray-600 text-center">Captain</div>
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm text-center placeholder:text-center"
                          />
                        </div>

                        {/* Player Name */}
                        <div className="col-span-3">
                          <input
                            type="text"
                            placeholder="Name Surname"
                            value={player.name}
                            onChange={(e) => updatePlayer(team.id, player.id, 'name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm text-center placeholder:text-center"
                          />
                        </div>

                        {/* Height */}
                        <div className="col-span-2">
                          <input
                            type="text"
                            placeholder="Height"
                            value={player.height}
                            onChange={(e) => updatePlayer(team.id, player.id, 'height', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm text-center placeholder:text-center"
                          />
                        </div>

                        {/* Position */}
                        <div className="col-span-2">
                          <select
                            value={player.position}
                            onChange={(e) => updatePlayer(team.id, player.id, 'position', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm bg-white text-center"
                          >
                            <option value="">Position</option>
                            {basketballPositions.map((pos) => (
                              <option key={pos} value={pos}>
                                {pos}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* DOB */}
                        <div className="col-span-2">
                          <input
                            type="date"
                            placeholder="DOB"
                            value={player.dob}
                            onChange={(e) => updatePlayer(team.id, player.id, 'dob', e.target.value)}
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
          <div className="flex gap-3">
            <button
              onClick={handlePrevious}
              className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Previous
            </button>
            <button
              onClick={handleDiscard}
              className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Discard
            </button>
          </div>
          <button
            onClick={handleSaveNext}
            className="px-6 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
