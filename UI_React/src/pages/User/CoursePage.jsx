import React, { useState } from 'react';
import image from '../../assets/images/course1.jpeg';

const CourseDescriptionPage = () => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const handleEnrollButtonClick = () => {
    setShowEnrollmentForm(true);
    // Optionally, you can scroll to the enrollment form section when the button is clicked
    window.scrollTo({ top: document.getElementById('enrollmentForm').offsetTop, behavior: 'smooth' });
  };

  const handleEnrollmentFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-row">
        <div className="w-1/2 mr-8">
          <img src={image} alt="Course Image" className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="w-1/2">
          <div className="mb-8 mt-10">
            <h1 className="text-3xl font-bold mb-4">Course Name</h1>
            <p className="text-lg mb-4">Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-gray-600">Price: $XX</p>
            <p className="text-gray-600">Duration: XX weeks</p>
          </div>
          <div className="flex flex-col">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleEnrollButtonClick}>
              Enroll in Course
            </button>
          </div>
        </div>
      </div>

      {showEnrollmentForm && (
        <div id="enrollmentForm" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Enrollment Form</h2>
          <form onSubmit={handleEnrollmentFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input type="text" id="name" name="name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input type="tel" id="phone" name="phone" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
            </div>
            <div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit Enrollment
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CourseDescriptionPage;
