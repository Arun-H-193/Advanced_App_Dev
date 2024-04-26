import React from 'react';

const Team = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="team-member">
          <img
            className="w-48 h-48 rounded-full mx-auto mb-4"
            src="https://via.placeholder.com/150"
            alt="John Doe"
          />
          <h3 className="text-xl font-bold text-center mb-2">John Doe</h3>
          <p className="text-gray-600 text-center mb-4">Chess Instructor</p>
          <p className="text-gray-700 text-center">
            John is a skilled chess player with years of teaching experience.
          </p>
        </div>
        <div className="team-member">
          <img
            className="w-48 h-48 rounded-full mx-auto mb-4"
            src="https://via.placeholder.com/150"
            alt="Jane Smith"
          />
          <h3 className="text-xl font-bold text-center mb-2">Jane Smith</h3>
          <p className="text-gray-600 text-center mb-4">Chess Coach</p>
          <p className="text-gray-700 text-center">
            Jane is a former chess champion and has trained numerous successful players.
          </p>
        </div>
        <div className="team-member">
          <img
            className="w-48 h-48 rounded-full mx-auto mb-4"
            src="https://via.placeholder.com/150"
            alt="Michael Johnson"
          />
          <h3 className="text-xl font-bold text-center mb-2">Michael Johnson</h3>
          <p className="text-gray-600 text-center mb-4">Chess Master</p>
          <p className="text-gray-700 text-center">
            Michael is a highly regarded chess player and has won multiple tournaments.
          </p>
        </div>
        <div className="team-member">
          <img
            className="w-48 h-48 rounded-full mx-auto mb-4"
            src="https://via.placeholder.com/150"
            alt="Emily Davis"
          />
          <h3 className="text-xl font-bold text-center mb-2">Emily Davis</h3>
          <p className="text-gray-600 text-center mb-4">Chess Expert</p>
          <p className="text-gray-700 text-center">
            Emily has a deep understanding of chess strategies and enjoys sharing her knowledge.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 flex items-center justify-center">
        <div className='text-center'>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">We're Hiring!</h3>
          <p className="text-gray-600 mb-4">Join our team of passionate chess instructors.</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-blue-700">
            Open Positions
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Team;
