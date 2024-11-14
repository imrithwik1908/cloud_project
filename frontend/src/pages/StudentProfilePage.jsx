import React from 'react';
import NewNav from '../components/NewNav';
import StudentHome from './StudentHome';
import StudentNav from '../components/StudentNav';

function StudentProfilePage() {
  return (
    <div>
      <StudentNav/>
<div className="bg-blue-50 min-h-screen flex justify-center items-center py-10">
      {/* Profile Container */}
      <div className="w-full max-w-3xl bg-gray-100 rounded-2xl shadow-xl p-8">
        {/* "My Profile" Title */}
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">My Profile</h2>

        {/* Student Name Box */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium text-black">Student Name</h3>
            <p className="text-gray-600 text-lg">Jane Smith</p>
          </div>
        </div>

        {/* Department Box */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium text-black">Department</h3>
            <p className="text-gray-600 text-lg">Computer Science & Engineering</p>
          </div>
        </div>

        {/* Registration Number Box */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium text-black">Registration Number</h3>
            <p className="text-gray-600 text-lg">CS20230001</p>
          </div>
        </div>

        {/* Semester Box */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium text-black">Semester</h3>
            <p className="text-gray-600 text-lg">5th Semester</p>
          </div>
        </div>

        {/* Completed Credits Box */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium text-black">Completed Credits</h3>
            <p className="text-gray-600 text-lg">90 Credits</p>
          </div>
        </div>

        {/* Contact Information Box */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all mb-6">
          <h3 className="text-xl font-medium text-black text-left mb-2">Contact Information</h3>
          <div className="space-y-4">
            {/* Phone Number */}
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium text-black">Phone Number</h4>
              <p className="text-gray-600 text-lg">+91 98765 43210</p>
            </div>

            {/* Email Address */}
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium text-black">Email Address</h4>
              <p className="text-gray-600 text-lg">janesmith@iiitdwd.ac.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default StudentProfilePage;
