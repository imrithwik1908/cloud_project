import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import StudentCourseCard from '../components/StudentCourseCard';
import StudentEnrolledCard from '../components/StudentEnrolledCard';
import StudentNav from '../components/StudentNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentHome() {
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      courseCode: 'CSE101',
      courseName: 'Introduction to Programming',
      professor: 'Dr. John Doe',
      credits: 3,
    },
    {
      courseCode: 'CSE102',
      courseName: 'Data Structures and Algorithms',
      professor: 'Dr. Jane Smith',
      credits: 4,
    },
  ]);

  const [moreCourses, setMoreCourses] = useState([
    {
      courseCode: 'CSE201',
      courseName: 'Database Management Systems',
      professor: 'Prof. Michael Lee',
      credits: 3,
    },
    {
      courseCode: 'CSE202',
      courseName: 'Operating Systems',
      professor: 'Dr. Emily Brown',
      credits: 4,
    },
  ]);

  // Function to handle adding a course
  const handleAddCourse = (course) => {
    // Remove course from moreCourses
    toast.success("Course added to cart")

    console.log('add course to cart')
    setMoreCourses((prevCourses) =>
      prevCourses.filter((c) => c.courseCode !== course.courseCode)
    );
  };

  return (
    <div>
      <StudentNav />
      
      {/* Enrolled Courses Section */}
      <div className="flex-col my-4">
        <div className="text-2xl font-semibold mb-2">
          Enrolled Courses:
        </div>
        <div className="courses-container flex justify-center flex-wrap">
          {enrolledCourses.map((course, index) => (
            <StudentEnrolledCard
              key={index}
              courseName={course.courseName}
              courseCode={course.courseCode}
              credits={course.credits}
              professorName={course.professor}
            />
          ))}
        </div>
      </div>
      
      {/* Add More Courses Section */}
      <div className="flex-col my-4">
        <div className="text-2xl font-semibold mb-2">
          Add More Courses:
        </div>
        <div className="courses-container flex justify-center flex-wrap">
          {moreCourses.map((course, index) => (
            <StudentCourseCard
              key={index}
              courseName={course.courseName}
              courseCode={course.courseCode}
              credits={course.credits}
              professorName={course.professor}
              onAddCourse={() => handleAddCourse(course)} // Add course on click
            />
          ))}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default StudentHome;
