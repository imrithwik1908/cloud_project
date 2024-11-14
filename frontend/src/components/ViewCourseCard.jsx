import React from 'react';

function ViewCourseCard({ courseName, courseCode, credits, professorName }) {
  return ( 
    <div className="max-w-sm w-full rounded-lg shadow-lg bg-gray-100 h-60 p-6 m-4 hover:shadow-2xl transform hover:scale-102 transition duration-100 ease-in-out">
      <div className="relative flex flex-col h-48 justify-between bg-white bg-opacity-80 p-6 rounded-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">{courseName}</h2>
          <p className="text-gray-600 text-lg">Course Code: <span className="font-medium">{courseCode}</span></p>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <p className="text-base">Credits: <span className="font-medium">{credits}</span></p>
          <p className="text-base">Professor: <span className="font-medium">{professorName}</span></p>
        </div>
      </div>
    </div>
  );
}

export default ViewCourseCard;
