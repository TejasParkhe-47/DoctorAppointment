import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-8 bg-white">
      <div className="w-full max-w-6xl">
      
        <div className="text-center pt-10">
          <p className="text-3xl font-semibold text-gray-700">
            About <span className="text-primary">Us</span>
          </p>
        </div>

       
        <div className="my-14 flex flex-col md:flex-row items-center gap-12">
          <img
            className="w-full md:max-w-[360px] rounded-lg shadow-md"
            src={assets.logo}
            alt="About Illustration"
          />

          <div className="flex flex-col justify-center gap-6 text-gray-600 text-base md:w-2/3">
            <p>
              We are a team of passionate developers and healthcare enthusiasts committed to bridging the gap between patients and healthcare providers. Our goal is to make healthcare more accessible, reliable, and patient-centered through technology. By understanding the common pain points in booking appointments, we’ve created an app that is both practical and empowering.
            </p>

            <div>
              <p className="font-semibold text-xl text-gray-800 mb-1">Our Vision</p>
              <p>
                To revolutionize the healthcare experience by making access to trusted medical professionals as simple as booking a cab or ordering food. We envision a future where healthcare is proactive, digital-first, and centered around patient convenience and empowerment.
              </p>
            </div>
          </div>
        </div>

        
        <div className="text-center mb-8">
          <p className="text-2xl font-semibold text-gray-700">
            Why <span className="text-primary">Choose Us</span>
          </p>
        </div>

       
        <div className="flex flex-col md:flex-row gap-6 mb-20">
          
          <div className="border rounded-xl px-8 py-10 flex flex-col gap-4 text-sm text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-md">
            <p className="text-lg font-semibold">Efficiency</p>
            <p>
              We believe in saving both time and effort. With our intelligent scheduling system, users can view real-time doctor availability, receive instant booking confirmations, and get timely reminders — reducing wait times and missed appointments. Our backend is optimized for fast data handling and our intuitive interface ensures a seamless experience for all users.
            </p>
          </div>

         
          <div className="border rounded-xl px-8 py-10 flex flex-col gap-4 text-sm text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-md">
            <p className="text-lg font-semibold">Convenience</p>
            <p>
              No more waiting in lines or struggling to reach clinics by phone. Our platform provides 24/7 access to book appointments, view doctor availability, and receive instant confirmations — all from the comfort of your home.
            </p>
          </div>

          
          <div className="border rounded-xl px-8 py-10 flex flex-col gap-4 text-sm text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-md">
            <p className="text-lg font-semibold">Personalization</p>
            <p>
              Every patient is unique — and so is their health journey. Our app offers personalized suggestions based on health concerns, preferred doctors, and past visits. Users can maintain profiles, save favorite clinics, and receive health tips tailored to their needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
