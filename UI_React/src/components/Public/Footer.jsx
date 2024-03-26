import React, { useState } from 'react';

const Footer = () => {
  // State to manage modal visibility
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);

  return (
    <footer className="relative bg-black text-white py-4 w-screen">
      <div className="w-screen">
        <div className="flex flex-wrap items-center justify-between">
          <div className="md:w-1/4">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="md:w-1/4 text-right">
            {/* Trigger buttons for modals */}
            <button onClick={() => setShowPrivacyPolicy(true)} className="mr-4 hover:text-gray-400 border-none bg-transparent">Privacy Policy</button>
            <button onClick={() => setShowTermsConditions(true)} className="hover:text-gray-400 border-none bg-transparent">Terms of Service</button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
            <p>This is the privacy policy content.</p>
            <button onClick={() => setShowPrivacyPolicy(false)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Close</button>
          </div>
        </div>
      )}

      {/* Terms and Conditions Modal */}
      {showTermsConditions && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
            <p>This is the terms and conditions content.</p>
            <button onClick={() => setShowTermsConditions(false)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
