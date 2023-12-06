import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "../Modules";
import Home from "../Home";
import { Helmet } from "react-helmet";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { AiOutlineMenu } from "react-icons/ai";

function Courses() {
    const { courseId } = useParams();
     const URL = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState({ name: "New Course"});
    const findCourseById = async (courseId) => {
      const response = await axios.get(
        `${URL}/${courseId}`
      );
      setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
      }, [courseId]);
    
    // const course = db.courses.find((course) => course._id === courseId);
    return (
        <div>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <div>
            <AiOutlineMenu style={{ display: 'inline-block' }}/>
            <h1 className="course-name" style={{ display: 'inline-block' }}>Course {course.number} &gt; {course.name} </h1>
            </div>
            <div className="horizontal-line1"></div>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "100px",
                    }}
                >
                    
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;