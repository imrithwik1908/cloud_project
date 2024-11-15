const Course = require('../models/Course')
const Student = require('../models/Student')

// View Course Catalog
exports.viewCatalog = async (req, res) => {
    try {
        const courses = await Course.find() 
        res.render('student/catalog', {courses})
    } catch (error) {
        console.error('Error fecthing the courses', error)
        res.status(500).send('Internal Server Error!!')
    }
}

// View course details
exports.viewCourseDetails = async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId).populate('professor', 'name department')
        res.render('student/courseDetails', {course})
    } catch (error) {
        console.error('Error fecthing the courses', error)
        res.status(500).send('Internal Server Error!!')
    }
}

// View Student Profile
exports.viewProfile = async (req, res) => {
    try {
        const student = await Student.findById(req.user._id);
        res.render('student/profile', { student });
    } catch (error) {
        console.error('Error fetching student profile:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Update Student Profile
exports.updateProfile = async (req, res) => {
    try {
        const { name, email, semester } = req.body;
        const student = await Student.findById(req.user._id);

        // Update student's profile information
        student.name = name || student.name;
        student.email = email || student.email;
        student.semester = semester || student.semester;

        await student.save();
        res.redirect('/student/profile');
    } catch (error) {
        console.error('Error updating student profile:', error);
        res.status(500).send('Internal Server Error');
    }
};




// Add course to cart
// Add course to cart
// Add course to cart
exports.addToCart = async (req, res) => {
    try {
        const student = await Student.findById(req.user._id);
        // Check if the course is not already enrolled or in the cart
        if (!student.enrolledCourses.includes(req.params.courseId) && !student.cart.includes(req.params.courseId)) {
            student.cart.push(req.params.courseId);
            await student.save();
        }

        if (req.xhr) {
            // If the request is an AJAX request, respond with JSON
            return res.json({ success: true, message: 'Added to cart successfully!' });
        }

        // Redirect if not an AJAX request (fallback)
        res.redirect('/student/cart');
    } catch (error) {
        console.error('Error adding course to cart:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' }); 
    }
};


// Student Dashboard - combined view for courses and enrolled courses
exports.getStudentDashboard = async (req, res) => {
    try {
        const student = await Student.findById(req.user._id).populate('enrolledCourses');
        const allCourses = await Course.find();

        // Filter out the enrolled courses from the available courses list
        const availableCourses = allCourses.filter(course => 
            !student.enrolledCourses.some(enrolledCourse => enrolledCourse._id.toString() === course._id.toString())
        );

        // Calculate total enrolled credits dynamically by summing the credits of enrolled courses
        const enrolledCredits = student.enrolledCourses.reduce((total, course) => total + course.credits, 0);

        res.render('student/home', {
            user: req.user,
            enrolledCourses: student.enrolledCourses,
            availableCourses: availableCourses, // Pass the filtered available courses
            enrolledCredits: enrolledCredits,
        });
    } catch (error) {
        console.error('Error loading student dashboard:', error);
        res.status(500).send('Internal Server Error');
    }
};





// View cart
exports.viewCart = async (req, res) => {
    try {
        const student = await Student.findById(req.user._id).populate('cart')
        res.render('student/cart', {cart: student.cart})
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).send('Internal Server Error');
    }
}

// Enroll in courses
exports.enrollInCourses = async (req, res) => {
    try {
        const student = await Student.findById(req.user._id).populate('cart');
        const totalCredits = student.cart.reduce((total, course) => total + course.credits, 0);

        if (totalCredits + student.enrolledCredits > student.creditLimit) {
            return res.status(400).send('Credit Limit Exceeded!!');
        }

        // Add courses to enrolledCourses in Student model
        student.enrolledCourses.push(...student.cart);
        student.enrolledCredits += totalCredits;

        // Now update the enrolledStudents array in the Course model
        for (let course of student.cart) {
            // Add student to the course's enrolledStudents array
            course.enrolledStudents.push(student._id);

            // Save the updated course
            await course.save(); // This ensures the update is persisted in the database
        }

        // Clear the cart after enrollment
        student.cart = [];
        await student.save();

        res.redirect('/student/enrolled');
    } catch (error) {
        console.error('Error enrolling in courses:', error);
        res.status(500).send('Internal Server Error');
    }
};




// View enrolled courses
exports.viewEnrolledCourses = async (req, res) => {
    try {
        const student = await Student.findById(req.user._id).populate('enrolledCourses')
        res.render('student/enrolledCourses', {courses : student.enrolledCourses})
    } catch (error) {
        console.error('Error fetching enrolled courses:', error);
        res.status(500).send('Internal Server Error');
    }
}  