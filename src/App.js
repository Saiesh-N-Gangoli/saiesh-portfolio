import { Route, Routes } from 'react-router';
import './App.css';
import React from 'react';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import Project from './Projects/Project';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
