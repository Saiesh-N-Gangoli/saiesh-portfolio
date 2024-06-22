import {React,  useEffect, useState } from 'react'
import { ProgressBar } from "react-bootstrap";

const ProgressSkillBar = () => {
    const [progressValue, setProgressValue] = useState({
        HTML : 0,
        React: 0,
        AWS: 0,
        Springboot: 0,
        Java: 0,
        CProgramming:0,
        SQL:0
      })
    
      useEffect(()=>{
        const timer = setTimeout(() => {
          setProgressValue({HTML : 80, AWS: 15, React: 70, Springboot: 75, Java: 65, CProgramming:50, SQL: 60})
        }, 100);
        return ()=>clearTimeout(timer);
      },[])
  return (
    <>
      <div className="single-skills">
              <p>HTML, CSS and JS</p>
            <ProgressBar animated now={progressValue.HTML}/>
            </div>
            <div className="single-skills">
              <p>React JS & Redux</p>
            <ProgressBar animated now={progressValue.React}/>
            </div>
            <div className="single-skills">
              <p>Java</p>
            <ProgressBar animated now={progressValue.Java}/>
            </div>
            <div className="single-skills">
              <p>C Programming</p>
            <ProgressBar animated now={progressValue.CProgramming}/>
            </div>
            <div className="single-skills">
              <p>Springboot</p>
            <ProgressBar animated now={progressValue.Springboot}/>
            </div>
            <div className="single-skills">
              <p>SQL</p>
            <ProgressBar animated now={progressValue.SQL}/>
            </div>
            <div className="single-skills">
              <p>AWS</p>
            <ProgressBar animated now={progressValue.AWS}/>
            </div>
    </>
  )
}

export default ProgressSkillBar
