import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ScrollToTop from './ScrollToTop';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NewsletterPage from './pages/NewsletterPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [projects, setProjects] = useState([])


  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data)
      })
      .catch(error => console.error('Error fetching projects:', error))
  }, [])
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage projects={projects}/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
