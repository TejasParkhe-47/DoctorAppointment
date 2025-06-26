import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterdoc, setFilterDoc] = useState([]);
  const [showfilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const specialties = [
    'General physician',
    'Dermatologist',
    'Pediatricians',
    'Gynecologist',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-24 py-10 text-gray-800 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Find a Specialist</h2>
      <p className="text-sm text-gray-600 mb-6">Browse through doctors by specialty and book your appointment instantly.</p>

      <div className="flex flex-col sm:flex-row gap-8">
        <div className="sm:w-64 w-full">
          <button
            onClick={() => setShowFilter(!showfilter)}
            className="sm:hidden mb-4 px-4 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            {showfilter ? 'Hide Filters' : 'Show Filters'}
          </button>

          <div className={`sm:block ${showfilter ? 'block' : 'hidden'} transition-all duration-300`}>
            <div className="flex flex-col gap-3 text-sm">
              {specialties.map((type, index) => (
                <p
                  key={index}
                  onClick={() =>
                    speciality === type ? navigate('/doctors') : navigate(`/doctors/${type}`)
                  }
                  className={`cursor-pointer px-4 py-2 rounded-md border border-gray-300 transition-all ${
                    speciality === type
                      ? 'bg-primary text-white border-primary'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {type}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterdoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                className="w-full h-48 object-cover bg-gray-100"
                src={item.image}
                alt={item.name}
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500 mb-1">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <p>Available</p>
                </div>
                <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
