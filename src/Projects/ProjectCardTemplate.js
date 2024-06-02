import React from 'react'
import { Button, Card} from 'react-bootstrap'
import './Project.css'
import { IoIosLink } from "react-icons/io";

const ProjectCardTemplate = ({title, content, url}) => {


    const handleButtonClick = () => {
        window.open(url, '_blank'); 
      }
  return (
    <div>
      <Card style={{ width: '22rem' }} className='project-card mb-4 play-regular'>
      <Card.Body>
        <Card.Title className='fw-bold text-center title-project'>{title}</Card.Title>
        <Card.Text className='content'>{content}</Card.Text>
        <div className='project-container'>
        <Button className='project-button' onClick={handleButtonClick}><IoIosLink/> Open in Github</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProjectCardTemplate
