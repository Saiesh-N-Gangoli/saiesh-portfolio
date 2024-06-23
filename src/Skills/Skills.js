import React from "react";
import "./Skills.css"
import ProgressSkillBar from "./ProgressSkillBar";


const Skills = () => {
  return (
    <div>
      <div className="main-container">
        <div className="skills-container">
          
        </div>
        <hr />
         
        <div className="techincal-skills-main-container">
          <div className="first-techincal-skills-main-container">
            <div className="underline-hover">
          <h4 className="aqua-color fw-bold">Techical Knowledge</h4>
            </div>
           <p className="mt-2">I possess a strong command of HTML, CSS, JS, React, Redux, Spring Boot, and Java, enabling me to build and maintain dynamic & user-friendly web applications. My proficiency in C programming and SQL complements my programming skills. Recently, I have started learning cloud computing with AWS, further broadening my technical capabilities.</p>
          </div>
          <div className="second-techincal-skills-main-container"></div>
          <div className="third-techincal-skills-main-container">
          <ProgressSkillBar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
