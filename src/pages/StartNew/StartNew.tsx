import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Official {
  id: number;
  name: string;
  role: string;
  shirtNumber: string;
}

const StartNew: React.FC = () => {
  const navigate = useNavigate();
  const [competitionName, setCompetitionName] = useState('');
  const [numberOfGames, setNumberOfGames] = useState('28');
  const [numberOfQuarters, setNumberOfQuarters] = useState('4');
  const [quarterDuration, setQuarterDuration] = useState('10 Mins');
  const [overtimeDuration, setOvertimeDuration] = useState('10 Mins');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [time, setTime] = useState('10:17');
  const [period, setPeriod] = useState('AM');
  const [court, setCourt] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [flyer, setFlyer] = useState<File | null>(null);

  const [officials, setOfficials] = useState<Official[]>([
    { id: 1, name: '', role: 'Crew Chief', shirtNumber: '' },
    { id: 2, name: '', role: 'Umpire', shirtNumber: '' },
    { id: 3, name: '', role: 'Umpire', shirtNumber: '' },
    { id: 4, name: '', role: 'Commissioner', shirtNumber: '' },
  ]);

  const handleOfficialChange = (id: number, field: keyof Official, value: string) => {
    setOfficials(officials.map(official => 
      official.id === id ? { ...official, [field]: value } : official
    ));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFlyer(e.target.files[0]);
    }
  };

  const handleDiscard = () => {
    console.log('Form discarded');
    navigate('/dashboard');
  };

  const handleSaveNext = () => {
    console.log('Form saved and moving to next step');
    // Save competition data (you can add API call here)
    navigate('/teams');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Competition Setup</h1>
          <div className="w-24 h-1 bg-green-500 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6 space-y-6">
            {/* Competition Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Competition</label>
              <input
                type="text"
                placeholder="Name Here"
                value={competitionName}
                onChange={(e) => setCompetitionName(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>

            {/* Number of Games and Quarters */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Games</label>
                <input
                  type="text"
                  value={numberOfGames}
                  onChange={(e) => setNumberOfGames(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Quarters</label>
                <input
                  type="text"
                  value={numberOfQuarters}
                  onChange={(e) => setNumberOfQuarters(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
            </div>

            {/* Quarter Duration and Overtime Duration */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quarter Duration</label>
                <input
                  type="text"
                  value={quarterDuration}
                  onChange={(e) => setQuarterDuration(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Overtime Duration</label>
                <input
                  type="text"
                  value={overtimeDuration}
                  onChange={(e) => setOvertimeDuration(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
            </div>

            {/* Date and Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date and Time</label>
              <div className="grid grid-cols-7 gap-2">
                <input
                  type="text"
                  placeholder="Day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="col-span-1 px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-center"
                />
                <input
                  type="text"
                  placeholder="Month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="col-span-2 px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-center"
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="col-span-1 px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-center"
                />
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="col-span-2 px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-center"
                />
                <button
                  onClick={() => setPeriod(period === 'AM' ? 'PM' : 'AM')}
                  className="col-span-1 px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {period}
                </button>
              </div>
            </div>

            {/* Venue */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Venue</label>
              <input
                type="text"
                placeholder="Court"
                value={court}
                onChange={(e) => setCourt(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 mb-3"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
            </div>

            {/* Officials */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Officials</label>
              <div className="space-y-3">
                {officials.map((official, index) => (
                  <div key={official.id} className="grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-1 text-sm text-gray-600">{index + 1}.</div>
                    <input
                      type="text"
                      placeholder="Name Surname"
                      value={official.name}
                      onChange={(e) => handleOfficialChange(official.id, 'name', e.target.value)}
                      className="col-span-5 px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                    <div className="col-span-3">
                      <select
                        value={official.role}
                        onChange={(e) => handleOfficialChange(official.id, 'role', e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                      >
                        <option value="Crew Chief">Crew Chief</option>
                        <option value="Umpire">Umpire</option>
                        <option value="Commissioner">Commissioner</option>
                        <option value="Referee">Referee</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      placeholder="Shirt Number"
                      value={official.shirtNumber}
                      onChange={(e) => handleOfficialChange(official.id, 'shirtNumber', e.target.value)}
                      className="col-span-3 px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={handleDiscard}
                className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Discard
              </button>
              <button
                onClick={handleSaveNext}
                className="px-6 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Save & Next
              </button>
            </div>
          </div>

          {/* Right Column - Upload Flyer */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <label
                htmlFor="flyer-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400">Upload Competition Flyer</p>
                </div>
                <input
                  id="flyer-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </label>
              {flyer && (
                <p className="mt-2 text-xs text-gray-600 text-center">
                  Selected: {flyer.name}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartNew;