import React, { useState } from "react";
import NewNav from "../components/NewNav";
import ViewCourseCard from "../components/ViewCourseCard";

function Home() {
  const [courses, setCourses] = useState([
    {
      courseCode: "CSE101",
      courseName: "Introduction to Programming",
      professor: "Dr. John Doe",
      credits: 3,
    },
    {
      courseCode: "CSE102",
      courseName: "Data Structures and Algorithms",
      professor: "Dr. Jane Smith",
      credits: 4,
    },
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

  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    courseName: "",
    courseCode: "",
    credits: "",
    professor: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleAddCourse = () => {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
    setShowForm(false); // Hide form after adding course
    setNewCourse({
      courseName: "",
      courseCode: "",
      credits: "",
      professor: "",
    }); // Reset form
  };

  return (
    <div>
      <NewNav />
      <button
        onClick={() => setShowForm(true)}
        className="flex justify-start ml-36 items-center hover:bg-gray-100 py-2 rounded-lg text-black text-sm focus:outline-none p-4 border border-black"
      >
        Add Course
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-3xl  text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4">Add New Course</h2>
            <input
              type="text"
              name="courseName"
              placeholder="Course Name"
              value={newCourse.courseName}
              onChange={handleInputChange}
              className="mb-2 p-2 border rounded w-full"
            />
            <input
              type="text"
              name="courseCode"
              placeholder="Course Code"
              value={newCourse.courseCode}
              onChange={handleInputChange}
              className="mb-2 p-2 border rounded w-full"
            />
            <input
              type="number"
              name="credits"
              placeholder="Credits"
              value={newCourse.credits}
              onChange={handleInputChange}
              className="mb-2 p-2 border rounded w-full"
            />
            <input
              type="text"
              name="professor"
              placeholder="Professor Name"
              value={newCourse.professor}
              onChange={handleInputChange}
              className="mb-2 p-2 border rounded w-full"
            />
            <button
              onClick={handleAddCourse}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-semibold ml-36">My courses:</h3>
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
    </div>
  );
}

export default Home;
