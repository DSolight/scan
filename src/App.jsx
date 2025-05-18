import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Главная страница */}
        <Route path="/auth" element={<Auth />} /> {/* Страница авторизации */}
        {/* Добавьте другие маршруты здесь */}
      </Routes>
    </Router>
  );
}
