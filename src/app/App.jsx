import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ActionPage } from '../pages/ActionPage';
import { ProfilePage } from '../pages/ProfilePage';
import { LoginForm } from '../features/auth/ui/LoginForm';
import { TaskView } from '../entities/task/ui/TaskView';
import './App.css';

export const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/action">Action</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/action" element={<ActionPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/task/:id" element={<TaskView />} />
      </Routes>
    </Router>
  );
};
