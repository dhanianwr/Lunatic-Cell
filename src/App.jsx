import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './assets/pages/landingpage';
import LoginForm from './assets/pages/login';
import AdminPage from './assets/pages/admin';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login-admin" element={<LoginForm/>}/>
        <Route path="/admin-page" element={<AdminPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;