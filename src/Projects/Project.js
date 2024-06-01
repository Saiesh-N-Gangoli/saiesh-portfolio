import React from "react";
import ProjectCardTemplate from "./ProjectCardTemplate";
import "./Project.css";
import Footer from "../Footer-Design/Footer";

const Project = () => {
  return (
    <React.Fragment>
    <div className="project-container mt-4">
      <ProjectCardTemplate
        title={"Repair Cafe"}
        content={
          "A PHP and HTML-based website for booking home electric product repairs. Implemented an admin panel for assigning workers to repair tasks, ensuring efficient service delivery. Enhanced user experience through seamless online booking and prompt service assignment."
        }
      />

      <ProjectCardTemplate title={"Snapdeal Full Stack - Clone"} 
      content={"Snapdeal clone using React for the frontend and Spring Boot with MS SQL for the backend. Implemented e-commerce features platform with features such as product listings shopping cart, and secure payment integration. Ensured robust performance and scalability."} />

      <ProjectCardTemplate title={"Tour India"} 
      content={"A responsive front-end project, built solely with HTML, CSS, and JavaScript, delivers a visually engaging and user-friendly web experience. Free from reliance on frameworks and libraries, it seamlessly adapts to various screen sizes, ensuring a consistent and interactive interface."} />

      <ProjectCardTemplate title={"Amazon S3 with Springboot"} 
      content={"A React image uploading application integrates React for the frontend and Spring Boot for the backend. Amazon S3 is used for storage, where users can upload, view and delete images. Through a interface users upload images can then browse uploaded images in a gallery-style view and can delete any images."} />
      
      <ProjectCardTemplate title={"title1"} content={"loremddewdwf"} />
      <ProjectCardTemplate title={"title1"} content={"loremddewdwf"} />
      <ProjectCardTemplate title={"title1"} content={"loremddewdwf"} />
      <ProjectCardTemplate title={"title1"} content={"loremddewdwf"} />
      <ProjectCardTemplate title={"title1"} content={"loremddewdwf"} />
    </div>
    <Footer/>
    </React.Fragment>
  );
};

export default Project;
