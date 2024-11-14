import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa"; // New icon


function StudentCourseCard({ courseName, courseCode, credits, professorName, onAddCourse }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddClick = () => {
    
    onAddCourse({ courseName, courseCode, credits, professor: professorName });
    

  };

  



  return (
    <div className="max-w-sm w-full rounded-lg shadow-lg bg-gray-100 p-6 m-4 h-60 hover:shadow-2xl transform hover:scale-103 transition duration-100 ease-in-out relative">
      <div className="flex flex-col justify-between bg-white bg-opacity-80 p-5 rounded-lg h-48">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">{courseName}</h2>
          <p className="text-gray-600 text-lg">
            Course Code: <span className="font-medium">{courseCode}</span>
          </p>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <p className="text-base">
            Credits: <span className="font-medium">{credits}</span>
          </p>
          <p className="text-base">
            Professor: <span className="font-medium">{professorName}</span>
          </p>
        </div>

        {/* Add Button - Positioned at the bottom right */}
        <div className="absolute bottom-1 right-1">
          <button onClick={handleAddClick} className="text-3xl text-black-500 hover:text-blue-700 transition duration-300 transform hover:scale-110">
            <FaPlusCircle />
          </button>
        </div>
      </div>

    

    
    </div>
  );
}

export default StudentCourseCard;
