import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import {Link} from "react-router-dom";
function Kanbas() {
  const initialCourseState = {
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2024-01-15",
    _id: ""
}
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(initialCourseState);
  const URL = "http://localhost:4000/api/courses";

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse( initialCourseState );
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((c) => c._id !== courseId));
};

const updateCourse = async (course) => {
  try {
    await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element=
          {<Dashboard 
          courses={courses}
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse}
          />} />
          
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;

