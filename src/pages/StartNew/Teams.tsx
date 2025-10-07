import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiChevronUp, FiChevronDown, FiPlus } from 'react-icons/fi'

interface CoachingStaff {
  id: number;
  name: string;
  role: string;
  country: string;
}

interface Team {
  id: number;
  name: string;
  shortName: string;
  shortTeamCode: string;
  longTeamCode: string;
  teamColor: string;
  logo: File | null;
  isExpanded: boolean;
  coachingStaff: CoachingStaff[];
}

const Teams: React.FC = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState<Team[]>([
    {
      id: 1,
      name: '',
      shortName: '10 Mins',
      shortTeamCode: 'ABC',
      longTeamCode: 'ABCDEF',
      teamColor: '#FF4444',
      logo: null,
      isExpanded: true,
      coachingStaff: [
        { id: 1, name: '', role: 'Coach', country: '' },
        { id: 2, name: '', role: 'Assistant Coach', country: '' },
        { id: 3, name: '', role: 'Assistant Coach', country: '' },
      ],
    },
  ]);

  const addTeam = () => {
    const newTeam: Team = {
      id: teams.length + 1,
      name: '',
      shortName: '',
      shortTeamCode: '',
      longTeamCode: '',
      teamColor: '#000000',
      logo: null,
      isExpanded: false,
      coachingStaff: [
        { id: 1, name: '', role: 'Coach', country: '' },
        { id: 2, name: '', role: 'Assistant Coach', country: '' },
        { id: 3, name: '', role: 'Assistant Coach', country: '' },
      ],
    };
    setTeams([...teams, newTeam]);
  };

  const toggleTeam = (id: number) => {
    setTeams(teams.map(team => 
      team.id === id ? { ...team, isExpanded: !team.isExpanded } : team
    ));
  };

  const updateTeam = (id: number, field: keyof Team, value: any) => {
    setTeams(teams.map(team => 
      team.id === id ? { ...team, [field]: value } : team
    ));
  };

  const updateCoachingStaff = (teamId: number, staffId: number, field: keyof CoachingStaff, value: string) => {
    setTeams(teams.map(team => 
      team.id === teamId 
        ? { 
            ...team, 
            coachingStaff: team.coachingStaff.map(staff => 
              staff.id === staffId ? { ...staff, [field]: value } : staff
            )
          } 
        : team
    ));
  };

  const handleLogoUpload = (id: number, file: File | null) => {
    updateTeam(id, 'logo', file);
  };

  const handleDiscard = () => {
    console.log('Form discarded');
    navigate('/start-new');
  };

  const handleSaveNext = () => {
    console.log('Teams saved:', teams);
    // Save teams data (you can add API call here)
    // Navigate to players page
    navigate('/players');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-3">Teams</h1>
          <div className="flex gap-2">
            <div className="w-24 h-1 bg-green-500"></div>
            <div className="w-24 h-1 bg-green-500"></div>
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
                  Team {team.id}
                </h3>
                {team.isExpanded ? (
                  <FiChevronUp className="text-gray-600 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-600 text-xl" />
                )}
              </div>

              {/* Team Form - Collapsible */}
              {team.isExpanded && (
                <div className="px-6 pb-6 pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Left Column - Form Fields */}
                    <div className="lg:col-span-2 space-y-4">
                      {/* Name */}
                      <div>
                        <input
                          type="text"
                          placeholder="Name Here"
                          value={team.name}
                          onChange={(e) => updateTeam(team.id, 'name', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                        />
                      </div>

                      {/* Short Name and Short Team Code */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Short Name
                          </label>
                          <input
                            type="text"
                            value={team.shortName}
                            onChange={(e) => updateTeam(team.id, 'shortName', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Short Team Code
                          </label>
                          <input
                            type="text"
                            value={team.shortTeamCode}
                            onChange={(e) => updateTeam(team.id, 'shortTeamCode', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                          />
                        </div>
                      </div>

                      {/* Long Team Code and Team Color */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Long Team Code
                          </label>
                          <input
                            type="text"
                            value={team.longTeamCode}
                            onChange={(e) => updateTeam(team.id, 'longTeamCode', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Team Color
                          </label>
                          <div className="relative">
                            <input
                              type="color"
                              value={team.teamColor}
                              onChange={(e) => updateTeam(team.id, 'teamColor', e.target.value)}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
                              style={{ backgroundColor: team.teamColor }}
                            >
                              <span className="text-white font-medium text-sm">
                                {team.teamColor.toUpperCase()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Logo Upload */}
                    <div className="lg:col-span-1">
                      <label
                        htmlFor={`logo-upload-${team.id}`}
                        className="flex flex-col items-center justify-center w-full h-full min-h-[200px] border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors bg-gray-50"
                      >
                        <div className="flex flex-col items-center justify-center py-8">
                          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
                            <FiPlus className="text-white text-2xl" />
                          </div>
                          <p className="text-sm text-gray-400">Upload Team Logo</p>
                        </div>
                        <input
                          id={`logo-upload-${team.id}`}
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleLogoUpload(team.id, e.target.files?.[0] || null)}
                        />
                      </label>
                      {team.logo && (
                        <p className="mt-2 text-xs text-gray-600 text-center">
                          Selected: {team.logo.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Coaching Staff Section */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-base font-semibold text-gray-800 mb-4">Coaching Staff</h3>
                    <div className="space-y-3">
                      {team.coachingStaff.map((staff, index) => (
                        <div key={staff.id} className="grid grid-cols-12 gap-3 items-center">
                          <div className="col-span-1 text-sm text-gray-600 font-medium">
                            {index + 1}.
                          </div>
                          <input
                            type="text"
                            placeholder="Name Surname"
                            value={staff.name}
                            onChange={(e) => updateCoachingStaff(team.id, staff.id, 'name', e.target.value)}
                            className="col-span-4 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                          />
                          <div className="col-span-4">
                            <div className="relative">
                              <select
                                value={staff.role}
                                onChange={(e) => updateCoachingStaff(team.id, staff.id, 'role', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white appearance-none pr-10"
                              >
                                <option value="Coach">Coach</option>
                                <option value="Assistant Coach">Assistant Coach</option>
                                <option value="Head Coach">Head Coach</option>
                                <option value="Trainer">Trainer</option>
                              </select>
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <FiChevronDown className="text-gray-400" />
                              </div>
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 pointer-events-none">
                                Role
                              </span>
                              <span className="absolute left-16 top-1/2 -translate-y-1/2 text-sm text-gray-900 pointer-events-none">
                                {staff.role}
                              </span>
                            </div>
                          </div>
                          <input
                            type="text"
                            placeholder="Country"
                            value={staff.country}
                            onChange={(e) => updateCoachingStaff(team.id, staff.id, 'country', e.target.value)}
                            className="col-span-3 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Coaching Staff Section */}
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h3 className="text-base font-semibold text-gray-800 mb-4">Coaching Staff</h3>
                    <div className="space-y-3">
                      {team.coachingStaff.map((staff, index) => (
                        <div key={staff.id} className="grid grid-cols-12 gap-3 items-center">
                          <div className="col-span-1 text-sm text-gray-600 font-medium">
                            {index + 1}.
                          </div>
                          <input
                            type="text"
                            placeholder="Name Surname"
                            value={staff.name}
                            onChange={(e) => updateCoachingStaff(team.id, staff.id, 'name', e.target.value)}
                            className="col-span-4 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                          />
                          <div className="col-span-4">
                            <div className="relative">
                              <select
                                value={staff.role}
                                onChange={(e) => updateCoachingStaff(team.id, staff.id, 'role', e.target.value)}
                                className="w-full px-4 py-2.5 pl-14 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white appearance-none pr-10"
                              >
                                <option value="Coach">Coach</option>
                                <option value="Assistant Coach">Assistant Coach</option>
                                <option value="Head Coach">Head Coach</option>
                                <option value="Trainer">Trainer</option>
                              </select>
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 pointer-events-none">
                                Role
                              </span>
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <FiChevronDown className="text-gray-400" />
                              </div>
                            </div>
                          </div>
                          <input
                            type="text"
                            placeholder="Country"
                            value={staff.country}
                            onChange={(e) => updateCoachingStaff(team.id, staff.id, 'country', e.target.value)}
                            className="col-span-3 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                          />
                        </div>
                      ))}
                    </div>
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

export default Teams;
