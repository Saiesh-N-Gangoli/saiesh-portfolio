import React from 'react'
import { Button, Card} from 'react-bootstrap'
import './Project.css'
import { IoIosLink } from "react-icons/io";

const ProjectCardTemplate = ({title, content}) => {
  return (
    <div>
      <Card style={{ width: '22rem' }} className='project-card mb-4 play-regular'>
      <Card.Body>
        <Card.Title className='fw-bold text-center'>{title}</Card.Title>
        <Card.Text className='content'>{content}</Card.Text>
        <div className='project-container'>
        <Button className='project-button'><IoIosLink/> Open in Github</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProjectCardTemplate
