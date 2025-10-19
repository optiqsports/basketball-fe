import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const TournamentsListing: React.FC = () => {
  const navigate = useNavigate();

  const tournaments = [
    {
      id: 1,
      title: "KCBL Club championship",
      location: "Kaduna, NG",
      date: "TBA",
      registrationFee: "N20,000",
      isRegistrationOpen: true
    },
    {
      id: 2,
      title: "KCBL Club championship",
      location: "Lagos, NG",
      date: "TBA",
      registrationFee: "N20,000",
      isRegistrationOpen: true
    },
    {
      id: 3,
      title: "KCBL Club championship",
      location: "Abuja, NG",
      date: "TBA",
      registrationFee: "N20,000",
      isRegistrationOpen: true
    },
    {
      id: 4,
      title: "KCBL Club championship",
      location: "Kano, NG",
      date: "TBA",
      registrationFee: "N20,000",
      isRegistrationOpen: true
    },
    {
      id: 5,
      title: "KCBL Club championship",
      location: "Port Harcourt, NG",
      date: "TBA",
      registrationFee: "N20,000",
      isRegistrationOpen: true
    },
    {
      id: 6,
      title: "KCBL Club championship",
      location: "Ibadan, NG",
      date: "TBA",
      registrationFee: "N20,000",
      isRegistrationOpen: true
    }
  ];

  const handleTournamentClick = (tournamentId: number) => {
    navigate(`/tournaments/${tournamentId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-normal text-gray-800">Tournaments</h1>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              onClick={() => handleTournamentClick(tournament.id)}
              style={{
                width: '310px',
                height: '413px',
                opacity: 1,
                borderRadius: '16px',
                borderWidth: '1px',
                background: '#FCFEFF',
                border: '1px solid #A9A9A91A'
              }}
              className="hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden"
            >
               {/* Tournament Graphic */}
               <div className="relative h-79 overflow-hidden">
                 {/* Background Flyer Image */}
                 <img 
                   src="/flyer.png" 
                   alt="Tournament Flyer" 
                   style={{
                     width: '286px',
                     height: '300px',
                     top: '14px',
                     left: '12px',
                     opacity: 1,
                     borderRadius: '6px'
                   }}
                   className="absolute object-cover"
                 />
               </div>

               {/* Tournament Details */}
               <div className="p-4">
                 <h3 className="text-lg font-semibold text-gray-800 mb-3">{tournament.title}</h3>
                
                <div className="flex items-center justify-start gap-4">
                  {/* Location */}
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm">{tournament.location}</span>
                  </div>
                  
                  {/* Date */}
                  <div className="flex items-center text-gray-600">
                    <FaCalendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm">{tournament.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentsListing;
