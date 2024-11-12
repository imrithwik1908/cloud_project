const Student = require("../models/Student")
const Professor = require("../models/Professor")

exports.ensureStudent = (req, res, next) => {
    if(req.isAuthenticated() && req.user instanceof Student){
        return next()
    }
    res.redirect('/')
}

exports.ensureProfessor = (req, res, next) => {
    if(req.isAuthenticated() && req.user instanceof Professor){
        return next()
    }
    res.redirect('/')
}