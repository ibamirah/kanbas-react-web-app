import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const colors = ["#F44336", "#2196F3", "#4CAF50", "#FFC107", "#9C27B0"];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

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