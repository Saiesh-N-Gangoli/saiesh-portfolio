import React from "react";
import ProjectCardTemplate from "./ProjectCardTemplate";
import "./Project.css";
import Footer from "../Footer-Design/Footer";
import { Content1, Content2, Content3, Content4, Content5, Content6, URL1, URL2, URL3, URL4, URL5, URL6 } from "./ProjectConstants";

const Project = () => {
  return (
    <React.Fragment>
    <div className="project-container mt-4">
      <ProjectCardTemplate title={"Repair Cafe"}content={Content1} url={URL1}/>

      <ProjectCardTemplate title={"Snapdeal Full Stack - Clone"} content={Content2} url={URL2} />

      <ProjectCardTemplate title={"Tour India"} content={Content3} url={URL3}/>

      <ProjectCardTemplate title={"Amazon S3 with Springboot"} content={Content4}  url={URL4}/>

      <ProjectCardTemplate title={"Detection & Localization of Lung Nodules using Graph Data Sci."} 
      content={Content5} url={URL5}/>
      <ProjectCardTemplate title={"Wine Prediction Using ML"} 
      content={Content6} 
      url={URL6}/>

      
    </div>
    <Footer/>
    </React.Fragment>
  );
};

export default Project;
