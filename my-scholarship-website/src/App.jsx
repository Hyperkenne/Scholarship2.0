import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Admission from './pages/Admission';
import FinancialAid from './pages/FinancialAid';
import AboutUs from './pages/AboutUs';
import AdminPanel from './components/AdminPanel';
import Hnavbar from './components/Hnavbar';
import Footer from './components/Footer';
import Advice from './components/advice';
import Blog from './pages/Blog'; // Ensure this path is correct
import Intro from './pages/Intro';
import Login from './pages/Login';
import Register from './pages/Register';

import axios from 'axios';

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  const isIntroPage = location.pathname === '/';

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token')?.split(' ')[1];
      if (token) {
        try {
          const { data } = await axios.post('http://localhost:4001/users/userData', { token });
          if (data) {
            setIsLogin(true);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else if (!isLoginPage && !isRegisterPage && !isIntroPage) {
        navigate('/login');
      }
    };

    fetchData();
  }, [isLoginPage, isRegisterPage, isIntroPage, navigate]);

  return (
    <>
      {!isLoginPage && !isRegisterPage && <Hnavbar />}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scholarships" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/financial-aid" element={<FinancialAid />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="/blog" element={<Blog />} /> {/* Ensure Blog component is used */}
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!isLoginPage && !isRegisterPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <div>
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
