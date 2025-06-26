import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-20 px-4 sm:px-8 text-gray-800">
      <h1 className="text-3xl font-semibold text-center">Top Doctors to Book</h1>
      <p className="text-center text-sm sm:w-1/2">
        Discover the best specialists related to your health needs. Choose from top-rated doctors available for quick appointments.
      </p>

      <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white"
          >
            <img className="w-full h-48 object-cover bg-gray-100" src={item.image} alt={item.name} />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500 mb-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <p>Available</p>
              </div>
              <p className="text-lg font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/doctors');
          scrollTo(0, 0);
        }}
        className="mt-10 bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-blue-600 transition duration-300"
      >
        View More
      </button>
    </div>
  );
};

export default RelatedDoctors;
