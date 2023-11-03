import db from "../Database";
import "./index.css";
import { Helmet } from "react-helmet";
import { React, useState } from "react";
import CourseCard from './CourseCard';

function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    const addNewCourse = () => {
        setCourses([...courses, {
            ...course, _id: new Date().getTime()
        }]);
    };

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

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

            <div className="addCourse">
                <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                <button className="btn-course add" onClick={addNewCourse}> Add </button>
                <button className="btn-course update" onClick={addNewCourse}> Update </button>
            </div>
            <div className="list-group">
                {courses.map((course) => (
                    <CourseCard key={course._id} course={course} onDelete={deleteCourse} />
                ))}

            </div>
        </div>
    );
}
export default Dashboard;


