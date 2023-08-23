import React from 'react';
import { Link } from 'react-router-dom';
import blur from '../images/blur.jpeg';
import logo from '../images/RacoonBearPreview.png';

const Mint = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <img
          src={blur}
          className="animate-pulse-slow absolute inset-auto block w-full min-h-screen object-cover opacity-20"
          alt="Background Blur"
        />
        <div className="w-full max-w-3xl bg-gray-900/80 backdrop-blur-sm py-8 rounded-md shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient from-green-400 to-blue-500 mt-3">
            Contract
          </h1>
          <h3 className="text-sm text-pink-300 tracking-wider text-center mt-2">
            0x750685ea3918804c736660DC7FdAe31ed8428E49
          </h3>
          <div className="flex flex-col md:flex-row md:space-x-10 items-center justify-center mt-8">
            <div className="relative w-full md:w-1/2">
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm font-semibold">
                <p>
                  <span>0</span> / 10000
                </p>
              </div>
              <img
                src={logo}
                className="w-full md:h-auto rounded-md shadow-md"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col items-center w-full md:w-1/2 space-y-4 md:space-y-8">
              <div className="flex items-center justify-between w-full">
                <button className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-white hover:bg-gray-400 bg-gray-300 font-bold rounded-md shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
                <p className="text-3xl font-bold text-brand-pink">
                  1
                </p>
                <button className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-white hover:bg-gray-400 bg-gray-300 font-bold rounded-md shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 12H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
