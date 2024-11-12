const Course = require("../models/Course");
const Professor = require("../models/Professor");
const Student = require("../models/Student");

exports.dashboard = async (req, res) => {
    try {
        const professor = await Professor.findById(req.user._id).populate('coursesTaught')
        res.render('professor/home', {professor})
    } catch (error) {
        console.error('Error loading professor dashboard:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.viewCourses = async (req, res) => {
    try {
        const courses = await Course.find({professor: req.user._id})
        res.render('professor/courses', {courses})
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).send('Internal Server Error');
    }
}

exports.newCourseForm = (req, res) => {
    res.render('professor/newCourse');
};

exports.createCourse = async (req, res) => {
    try {
        // Destructure all necessary fields from the request body
        const { name, courseCode, description, credits } = req.body;

        // Validate if courseCode is provided
        if (!courseCode) {
            return res.status(400).send('Course code is required');
        }

        // Create a new course instance
        const course = new Course({
            name,
            courseCode,
            description,
            credits,
            professor: req.user._id  // Link the course to the professor
        });
        await course.save();

        const professor = await Professor.findById(req.user._id);
        professor.coursesTaught.push(course._id);
        await professor.save();
        
        res.redirect('/professor/courses');
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.editCourseForm = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (course.professor.toString() !== req.user._id.toString()) {
            return res.status(403).send('Unauthorized');
        }
        res.render('professor/editCourse', { course });
    } catch (error) {
        console.error('Error loading course for editing:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const { name, description, credits } = req.body;
        const course = await Course.findById(req.params.id);

        if (course.professor.toString() !== req.user._id.toString()) {
            return res.status(403).send('Unauthorized');
        }

        course.name = name;
        course.description = description;
        course.credits = credits;
        await course.save();

        res.redirect('/professor/courses');
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.viewEnrolledStudents = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('enrolledStudents');
        res.render('professor/students', { course, students: course.enrolledStudents });
    } catch (error) {
        console.error('Error fetching enrolled students:', error);
        res.status(500).send('Internal Server Error');
    }
};
