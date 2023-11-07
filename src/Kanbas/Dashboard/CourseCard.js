import { React, useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";


function CourseCard({ course, onDelete, onEdit }) {
  const [ setIsEditing] = useState(false);

  return (
    <Card className="canvas-course-card course-card">
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{course.number}</Card.Subtitle>
        <Card.Text>{course.startDate}</Card.Text>
        <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
          View Course
        </Link>
        {/* <div className="deleteEditButton">
        <button className="edit-btn"  onClick={handleEditClick} >Edit</button>
        <button className="delete-btn" onClick={() => onDelete(course._id)}> Delete
        </button>
        </div> */}
      </Card.Body>
    </Card>
  );
}

export default CourseCard;