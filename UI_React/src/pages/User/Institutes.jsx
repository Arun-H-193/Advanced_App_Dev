import React, { useState } from 'react';
import InstituteCard from '../../components/user/Institutecard';

const InstitutesPage = () => {
  // Dummy data for institutes (replace with actual data from API)
  const [institutes, setInstitutes] = useState([
    { 
      id: 1, 
      name: "Chess Academy 1", 
      type: "Professional", 
      location: "New York", 
      established: "2005", 
      director: "John Doe",
      contact: {
        email: "info@chessacademy1.com",
        phone: "+1 (123) 456-7890",
        address: "123 Main Street, New York, NY"
      },
      description: "Chess Academy 1 offers professional chess training for all levels, from beginners to advanced players. Our experienced instructors provide comprehensive lessons covering everything from basic rules to advanced strategies."
    },
    { 
      id: 2, 
      name: "Chess Institute 2", 
      type: "Beginner", 
      location: "Los Angeles", 
      established: "2010", 
      director: "Jane Smith",
      contact: {
        email: "info@chessinstitute2.com",
        phone: "+1 (987) 654-3210",
        address: "456 Elm Street, Los Angeles, CA"
      },
      description: "Chess Institute 2 specializes in teaching beginners the fundamentals of chess. Our structured curriculum focuses on building a strong foundation in chess principles and tactics, making it ideal for aspiring players of all ages."
    },
    // Add more institutes as needed
  ]);

  // Dummy data for courses (replace with actual data from API)
  const [courses, setCourses] = useState([
    { 
      id: 1, 
      name: "Chess Basics", 
      description: "Learn the fundamentals of chess", 
      institute: "Chess Academy 1", 
      level: "Beginner", 
      instructor: "John Doe", 
      schedule: "Monday, Wednesday, Friday 6-8 PM", 
      price: "$100/month" 
    },
    { 
      id: 2, 
      name: "Advanced Chess Strategies", 
      description: "Master advanced strategies and tactics", 
      institute: "Chess Academy 1", 
      level: "Advanced", 
      instructor: "Alice Johnson", 
      schedule: "Tuesday, Thursday 6-8 PM", 
      price: "$120/month" 
    },
    // Add more courses as needed
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle viewing courses
  const handleViewCourses = () => {
    // Add logic here to handle viewing courses
    console.log("Viewing courses...");
  };

  // Filter institutes based on search query
  const filteredInstitutes = institutes.filter(institute =>
    institute.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container w-screen h-screen mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Chess Institutes</h1>
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 mb-4"
        placeholder="Search institutes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInstitutes.map(institute => (
          <InstituteCard 
            key={institute.id} 
            institute={institute} 
            courses={courses} 
            onViewCourses={handleViewCourses} // Pass onViewCourses function
          />
        ))}
      </div>
    </div>
  );
};

export default InstitutesPage;
