import React, { useState } from 'react';
import StudentNav from '../components/StudentNav'
import ViewCourseCard from '../components/ViewCourseCard';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([
    {
      courseCode: "CSE201",
      courseName: "Database Management Systems",
      professor: "Prof. Michael Lee",
      credits: 3,
    },
    {
      courseCode: "CSE202",
      courseName: "Operating Systems",
      professor: "Dr. Emily Brown",
      credits: 4,
    },
  ]);

  const handleCheckout = () => {
    console.log('checked out');
    toast.success("Courses Enrolled");

    // Delay navigation by 2 seconds to show the toast
    setTimeout(() => {
      navigate('/student-home');
    }, 1000); // 2000 ms = 2 seconds
  };

  return (
    <div>
        <StudentNav/>
        <div className="mt-6">
        <h3 className="text-lg font-semibold ">My cart:</h3>
        <div className="courses-container flex justify-center flex-wrap">
          {courses.map((course, index) => (
            <ViewCourseCard
              key={index}
              courseName={course.courseName}
              courseCode={course.courseCode}
              credits={course.credits}
              professorName={course.professor}
            />
          ))}
        </div>
      </div>
      <button
      className='bg-blue-500 p-4 rounded-md text-white mt-2'
      onClick={handleCheckout}
      >Proceed to checkout</button>
      <ToastContainer/>

    </div>
  )
}

export default Cart