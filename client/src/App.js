import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Article from './pages/Article';
import Search from './pages/Search';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<SignIn />} />
        <Route path='/article' element={<Article />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Router>

  );
}

export default App;
