const express = require('express');
const router = express.Router()

const profController = require('../controllers/professorController');
const { ensureProfessor } = require('../middleware/authMiddleware');
const { ensureIndexes } = require('../models/Student');

router.get('/home', ensureProfessor, profController.dashboard)

router.get('/courses', ensureProfessor, profController.viewCourses)

router.get('/courses/new', ensureProfessor, profController.newCourseForm)
router.post('/courses/new', ensureProfessor, profController.createCourse)

router.get('/courses/:id/edit', ensureProfessor, profController.editCourseForm)
router.post('/courses/:id/edit', ensureProfessor, profController.updateCourse)

router.get('/courses/:id/students', ensureProfessor, profController.viewEnrolledStudents)

module.exports = router