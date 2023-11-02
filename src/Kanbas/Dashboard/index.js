import db from "../Database";
import "./index.css";
import { Helmet } from "react-helmet";
import React from "react";
import CourseCard from './CourseCard';
function Dashboard() {
    const courses = db.courses;
    return (
        <div className="dashboard">
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <h1 className="dashboard-name">Dashboard</h1>
            <div className="horizontal-line"></div>
            <h3 className="published-name"> Published Courses ({courses.length}) </h3>
            <div className="horizontal-line"></div>
            <div className="list-group">
                {courses.map((course) => (
                    <CourseCard key={course._id} course={course} />
                ))}
            </div>
            {/* <div className="list-group">
                {courses.map((course) => (
                    <Card key={course._id}>
                        <Card.Body>
                            <Card.Title>{course.name}</Card.Title>
                            <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                                View Course
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div> */}
        </div>
    );
}
export default Dashboard;


