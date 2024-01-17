import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Article from './pages/Article';
import Search from './pages/Search';
import Upload from './pages/Upload';
import AuthProvider from './hooks/AuthProvider';
import ArticleView from './pages/ArticleView';
import SignUp from './pages/SignUp';


function App() {
  return (
    <Router>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/article' element={<Article />} />
            <Route path='/search' element={<Search />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/article/:articleId' element={<ArticleView />} />
          </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
