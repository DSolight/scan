import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Auth from './pages/Auth/Auth';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        {/* Добавьте другие маршруты здесь */}
      </Routes>
    </Router>
  );
}
