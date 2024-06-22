import React from "react";
import "./Skills.css";
import { Button, Card } from "react-bootstrap";

const SkillsTemplate = ({title, details, imgSrc}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="skills-card">
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SkillsTemplate;
