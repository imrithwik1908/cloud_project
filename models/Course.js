const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    courseCode: {
        type: String,
        required: true,
        unique: true,
    },
    credits: {
        type: Number,
        required: true,
    },
    professor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professor',
        required: true,
    },
    description: {    // Add description field here
        type: String,
        default: 'No description available', // Optional default value
    },
    enrolledStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

module.exports = mongoose.model('Course', courseSchema);
