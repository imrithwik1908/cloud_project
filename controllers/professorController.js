const Course = require("../models/Course");
const Professor = require("../models/Professor");
const Student = require("../models/Student");

exports.dashboard = async (req, res) => {
    try {
        const professor = await Professor.findById(req.user._id).populate('coursesTaught');
        res.render('professor/home', { professor });
    } catch (error) {
        console.error('Error loading professor dashboard:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.viewCourses = async (req, res) => {
    try {
        const courses = await Course.find({ professor: req.user._id });
        res.render('professor/courses', { courses });
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.newCourseForm = (req, res) => {
    res.render('professor/newCourse');
};

exports.createCourse = async (req, res) => {
    try {
        const { name, courseCode, description, credits } = req.body;

        if (!courseCode) {
            return res.status(400).send('Course code is required');
        }

        const course = new Course({
            name,
            courseCode,
            description,    // Store the description
            credits,
            professor: req.user._id
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

// View professor profile
exports.viewProfile = async (req, res) => {
    try {
        const professor = await Professor.findById(req.user._id); // Fetch professor data
        res.render('professor/profile', { professor });
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Update professor profile
exports.updateProfile = async (req, res) => {
    try {
        const professor = await Professor.findById(req.user._id);

        // Update the fields you want to allow the professor to change
        professor.name = req.body.name || professor.name;
        professor.phone = req.body.phone || professor.phone;
        professor.department = req.body.department || professor.department;

        await professor.save();
        res.redirect('/professor/profile'); // Redirect back to the profile page after updating
    } catch (error) {
        console.error('Error updating profile:', error);
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
        course.description = description;    // Update the description
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

// New delete course method
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course) {
            return res.status(404).send('Course not found');
        }

        // Remove course from the professor's list of taught courses
        const professor = await Professor.findById(req.user._id);
        professor.coursesTaught.pull(course._id);
        await professor.save();

        res.redirect('/professor/courses');
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).send('Internal Server Error');
    }
};
