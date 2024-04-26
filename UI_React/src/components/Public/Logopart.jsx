import React from 'react';
import logo from '../../assets/images/logo.png'

const LogoPart = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Logo */}
      <div className="flex items-center justify-between">
        <img className="h-10" src={logo} alt="Your company logo" />
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-500 font-medium">Column One</a>
          <a href="#" className="text-gray-700 hover:text-gray-500 font-medium">Column Two</a>
          <div className="relative">
            <button className="text-gray-700 hover:text-gray-500 font-medium focus:outline-none">
              Follow Us
              <svg
                className="inline-block w-4 h-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 ll0-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute hidden right-0 mt-1 py-1 bg-white rounded-lg shadow-sm w-min-xs">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Link One
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Link Six
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <svg
                  className="inline-block w-4 h-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 5v10h10V5H5z"
                  />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-8 flex flex-col  items-center justify-between">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Join our newsletter to receive updates on new features and releases.
          </h2>
          <p className="text-gray-600">
            {/* Add an input field here for email address */}
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-blue-500 focus:ring-opacity-50"
            />
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-2">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoPart;
