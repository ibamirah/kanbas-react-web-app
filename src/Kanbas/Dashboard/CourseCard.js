import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";


function CourseCard({ course }) {

  return (
    <Card className="canvas-course-card">
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{course.number}</Card.Subtitle>
        <Card.Text>{course.startDate}</Card.Text>
        <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                                View Course
                            </Link>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;