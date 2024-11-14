import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import StudentHome from './pages/StudentHome';
import AdminProfilePage from './pages/AdminProfilePage';
import StudentProfilePage from './pages/StudentProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/profile" element={<AdminProfilePage/>}/>
      <Route path="/student-home" element={<StudentHome/>}/>
      <Route path="/student-profile" element={<StudentProfilePage />}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
