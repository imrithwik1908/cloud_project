// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('passport');
const path = require('path');


// Load environment variables
dotenv.config(); 

// Import routes
const professorRoutes = require('./routes/professorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const Student = require('./models/Student');

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

// Set up session
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Load Passport config
require('./config/passport');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Failed to connect to MongoDB:', error));

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'] 
}));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
      // Redirect based on user role after successful login
      if (req.user instanceof Student) {
          res.redirect('/student/home');  
      } else {
          res.redirect('/professor/home');
      }    
  }
);

app.use('/professor', professorRoutes);   
app.use('/student', studentRoutes);
// app.use('/course', courseRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error('Error during logout:', err);
            return res.status(500).send('Error logging out');
        }
        res.redirect('/');
    });
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
