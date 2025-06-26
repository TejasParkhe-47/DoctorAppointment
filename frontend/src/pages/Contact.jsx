import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-8">
      <div className="w-full max-w-5xl">
        <div className="text-center pt-10">
          <p className="text-3xl font-semibold text-gray-700">
            Contact <span className="text-primary">Us</span>
          </p>
        </div>

        <div className="my-14 flex flex-col md:flex-row items-center gap-10">
          <img
            className="w-full md:max-w-[360px] rounded-lg shadow-md"
            src={assets.logo}
            alt="Contact Illustration"
          />

          <div className="flex flex-col gap-6 text-gray-600 text-base">
            <div>
              <p className="font-semibold text-xl text-gray-700">Our Office</p>
              <p>
                N-2, CIDCO, 431001<br />
                Chhatrapati Sambhajinagar
              </p>
            </div>

            <div>
              <p className="font-semibold text-xl text-gray-700">Contact Details</p>
              <p>
                Tel: +91 555-454<br />
                Email: <a href="mailto:tejasparkhe43@gmail.com" className="text-primary hover:underline">tejasparkhe43@gmail.com</a>
              </p>
            </div>

            <div>
              <p className="font-semibold text-xl text-gray-700">Careers at Medico</p>
              <p>Learn more about our team and job openings.</p>
            </div>

            <button className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition duration-300 w-fit">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
