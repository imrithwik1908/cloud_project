const express = require('express');
const router = express.Router()

const studentController = require("../controllers/studentController")
const {ensureStudent} = require("../middleware/authMiddleware")

// View Catalog
router.get('/catalog', ensureStudent, studentController.viewCatalog)

// View course details
router.get('/catalog/:courseId', ensureStudent, studentController.viewCourseDetails);

// Add course to cart
router.post('/catalog/:courseId/add', ensureStudent, studentController.addToCart);

// View cart
router.get('/cart', ensureStudent, studentController.viewCart);

// Enroll in courses
router.post('/enroll', ensureStudent, studentController.enrollInCourses);

// View enrolled courses
router.get('/enrolled', ensureStudent, studentController.viewEnrolledCourses);

router.get('/home', ensureStudent, studentController.getStudentDashboard);



module.exports = router

