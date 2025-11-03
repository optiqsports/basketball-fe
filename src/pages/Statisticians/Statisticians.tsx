import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiFilter, FiChevronDown, FiMapPin, FiArrowLeft, FiX } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';

interface Statistician {
  id: number;
  name: string;
  surname: string;
  location: string;
  image: string;
}

const Statisticians: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    bio: '',
    dob: '',
    phone: '',
    email: '',
    country: '',
    state: '',
    homeAddress: '',
    photo: null as File | null,
    photoPreview: null as string | null,
  });

  const statisticians: Statistician[] = [
    { id: 1, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/stat.png' },
    { id: 2, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/stat.png' },
    { id: 3, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/stat.png' },
    { id: 4, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/stat.png' },
    { id: 5, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/stat.png' },
    { id: 6, name: 'Name', surname: 'Surname', location: 'Kaduna, NG', image: '/stat.png' },
  ];

  const totalPages = 7;

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Statisticians</h1>
              </div>

      {/* Action Bar */}
      <div className="flex items-center gap-4 mb-8">
        {/* Add Statistician Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
        >
          Add Statistician
        </button>

        {/* Search Bar */}
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Statistician"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
        </div>
      </div>

      {/* Statistician Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {statisticians.map((statistician) => (
          <div
            key={statistician.id}
            onClick={() => navigate(`/statisticians/${statistician.id}`)}
            className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            {/* Image */}
            <div className="w-full h-100 bg-gray-200 relative overflow-hidden">
              <img
                src={statistician.image}
                alt={`${statistician.name} ${statistician.surname}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {statistician.name} {statistician.surname}
              </h3>
              <div className="flex items-center gap-2 text-gray-500">
                <FiMapPin size={16} />
                <span className="text-sm">{statistician.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentPage === page
                ? 'bg-blue-900 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Add Statistician Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Add Statistician</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <MdCancel size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Form Fields */}
                <div className="space-y-6">
                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <input
                      type="text"
                      placeholder="Name Here"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* DOB */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">DOB</label>
                    <input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact</label>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="relative">
                        <select
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                        >
                          <option value="">Country</option>
                          <option value="NG">Nigeria</option>
                          <option value="US">United States</option>
                          <option value="UK">United Kingdom</option>
                        </select>
                        <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                      </div>
                      <div className="relative">
                        <select
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                        >
                          <option value="">State</option>
                          <option value="Lagos">Lagos</option>
                          <option value="Abuja">Abuja</option>
                          <option value="Kaduna">Kaduna</option>
                        </select>
                        <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Home Address"
                      value={formData.homeAddress}
                      onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Right Column - Photo Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Photo</label>
                  <div
                    className="w-full h-96 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative"
                    onClick={() => document.getElementById('photo-upload')?.click()}
                  >
                    {formData.photoPreview ? (
                      <>
                        <img
                          src={formData.photoPreview}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFormData({ ...formData, photo: null, photoPreview: null });
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                        >
                          <FiX size={20} />
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="text-6xl font-light text-gray-400 mb-3">+</div>
                        <p className="text-gray-600 font-medium">Upload Image</p>
                      </>
                    )}
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFormData({
                              ...formData,
                              photo: file,
                              photoPreview: reader.result as string,
                            });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-4 p-6 border-t border-gray-200">
              <button
                onClick={() => {
                  // Handle save logic here
                  console.log('Form data:', formData);
                  // Add API call here to save the statistician
                  alert('Statistician saved successfully!');
                  setIsModalOpen(false);
                  setFormData({
                    bio: '',
                    dob: '',
                    phone: '',
                    email: '',
                    country: '',
                    state: '',
                    homeAddress: '',
                    photo: null,
                    photoPreview: null,
                  });
                }}
                className="px-6 py-2.5 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statisticians;
