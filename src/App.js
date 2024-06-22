import { Route, Routes } from 'react-router';
import './App.css';
import React, { useEffect, useState } from 'react';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import Project from './Projects/Project';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';
import NavigationBar from './NavigationBar/NavigationBar';
import Spinner from './Spinner/Spinner';
import SkillsTemplate from './Skills/SkillsTemplate';

function App() {
  const[loading, setLoading] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4500);

    return () => clearTimeout(timer);
  },[])

  if(loading){
    return <Spinner/>
  }

  return (
    <React.Fragment>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/skillst' element={<SkillsTemplate/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
