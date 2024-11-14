import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
