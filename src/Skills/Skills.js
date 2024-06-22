import React from "react";
import DoughnutChart from "./Doughnut";
import "./Skills.css"
import ProgressSkillBar from "./ProgressSkillBar";


const Skills = () => {
 

  

  return (
    <div>
      <div className="main-container">
        <div className="skills-container"></div>
        <hr />
          <h4 className="aqua-color">Techical Skills</h4>
        <div className="techincal-skills-main-container">
          <div className="first-techincal-skills-main-container">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,quod repellendus illum harum, ratione architecto accusantium et sit
            blanditiis molestiae sapiente cumque consectetur, suscipit rerum
            officia autem corrupti ipsam fugiat.</p>
          </div>
          <div className="second-techincal-skills-main-container">
           <DoughnutChart/>
          </div>
          <div className="third-techincal-skills-main-container">
          <ProgressSkillBar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
