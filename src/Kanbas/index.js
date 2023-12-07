import KanbasNavigation from "./KanbasNavigation";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
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
const { pathname } = useLocation();
  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <nav className="list-group">
    <Link to="kanbas"
        className={`list-group-item list-group-item-action ${pathname.includes("home") ? "active" : ""}`}>Home</Link>
    <Link to="/Kanbas/signin"
        className={`list-group-item list-group-item-action ${pathname.includes("signin") ? "active" : ""}`}>Sign In</Link>
    <Link to="/Kanbas/signup"
          className={`list-group-item list-group-item-action ${pathname.includes("signup") ? "active" : ""}`}>Sign Up</Link>
    <Link to="/Kanbas/account"
        className={`list-group-item list-group-item-action ${pathname.includes("account") ? "active" : ""}`}>Account</Link>
    <Link to="/Kanbas/search"
          className={`list-group-item list-group-item-action ${pathname.includes("search") ? "active" : ""}`}>Search</Link>
    
</nav>
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          {/* <Route path="Account" element={<h1>Account</h1>} /> */}
          <Route path="Dashboard" element=
          {<Dashboard 
          courses={courses}
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse}
          />}
           />
          
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;

