import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Employee from './Employee';
import PostEmployee from './PostEmployee';
import Update from './Upda';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/employee" element={<Employee />} />
        <Route path="/post-employee" element={<PostEmployee />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
