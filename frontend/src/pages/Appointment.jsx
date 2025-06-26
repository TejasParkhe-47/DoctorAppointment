import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencysym } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotidx, setSlotIdx] = useState(0);
  const [slottime, setSlotTime] = useState('');

  const daysofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const fetchDocInfo = () => {
    const foundDoc = doctors.find(doc => doc._id === docId);
    setDocInfo(foundDoc);
  };

  const getAvailableSlots = () => {
    setDocSlots([]);
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      const timeSlots = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="px-4 sm:px-8 lg:px-24 py-10 text-gray-800 bg-white">
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div className="w-full md:w-1/3">
            <img
              className="w-full h-full object-cover rounded-xl shadow-md"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>

          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-semibold">{docInfo.name}</h2>
              <img className="w-5" src={assets.verified_icon} alt="verified" />
            </div>

            <div className="text-sm text-gray-600 mb-4">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <span className="inline-block mt-2 px-3 py-1 border rounded-full text-xs font-medium">
                {docInfo.experiance}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 font-medium text-gray-900 mb-1">
                About <img className="w-4" src={assets.info_icon} alt="info" />
              </div>
              <p className="text-sm text-gray-600">{docInfo.about}</p>
            </div>

            <p className="font-medium mt-4 text-gray-700">
              Appointment Fee:{' '}
              <span className="font-semibold">
                {currencysym} {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Book a Slot</h3>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {docSlots.length > 0 &&
              docSlots.map((daySlots, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIdx(index)}
                  className={`min-w-[64px] text-center rounded-xl py-4 px-3 border cursor-pointer transition-all ${
                    slotidx === index
                      ? 'bg-primary text-white border-primary'
                      : 'bg-gray-100 text-gray-800 border-gray-200'
                  }`}
                >
                  <p className="font-medium">
                    {daysofweek[daySlots[0]?.datetime.getDay()]}
                  </p>
                  <p className="text-sm">
                    {daySlots[0]?.datetime.getDate()}
                  </p>
                </div>
              ))}
          </div>

          <div className="flex gap-3 flex-wrap mt-6">
            {docSlots.length > 0 &&
              docSlots[slotidx].map((slot, index) => (
                <button
                  key={index}
                  onClick={() => setSlotTime(slot.time)}
                  className={`px-4 py-2 rounded-full text-sm border transition-all ${
                    slot.time === slottime
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-300 text-gray-700'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
          </div>

          <button className="mt-8 bg-primary hover:bg-blue-600 text-white font-medium px-10 py-3 rounded-full transition duration-300">
            Book Appointment
          </button>
        </div>

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
