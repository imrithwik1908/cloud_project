const express = require('express');
const router = express.Router();

const profController = require('../controllers/professorController');
const { ensureProfessor } = require('../middleware/authMiddleware');
const { ensureIndexes } = require('../models/Student');

router.get('/home', ensureProfessor, profController.dashboard);

router.get('/courses', ensureProfessor, profController.viewCourses);

router.get('/courses/new', ensureProfessor, profController.newCourseForm);
router.post('/courses/new', ensureProfessor, profController.createCourse);

router.get('/courses/:id/edit', ensureProfessor, profController.editCourseForm);
router.post('/courses/:id/edit', ensureProfessor, profController.updateCourse);

router.get('/courses/:id/students', ensureProfessor, profController.viewEnrolledStudents);

// Add delete course route
router.get('/courses/:id/delete', ensureProfessor, profController.deleteCourse);

// Route to view professor profile
router.get('/profile', ensureProfessor, profController.viewProfile);

// Route to update professor profile (optional)
router.post('/profile', ensureProfessor, profController.updateProfile);


module.exports = router;
  