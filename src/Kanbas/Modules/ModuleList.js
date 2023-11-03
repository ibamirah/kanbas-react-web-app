// import React from "react";
// import { useParams } from "react-router-dom";
// import db from "../Database";


// function ModuleList() {
//   const { courseId } = useParams();
//   const modules = db.modules;
//   return (
//     <ul className="list-group">
//       {
//        modules
//          .filter((module) => module.course === courseId)
//          .map((module, index) => (
//            <li key={index} className="list-group-item">
//              <h3>{module.name}</h3>
//              <p>{module.description}</p>
//              {module.lessons &&
//               module.lessons.map((lesson, index) => (
//                 <div key={index}>
//                   <h4>{lesson.name}</h4>
//                   <p>{lesson.description}</p>
//                 </div>
//               ))}
//            </li>
//       ))
//       }
//     </ul>
//   );
// }
// export default ModuleList;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import db from "../Database";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const [isCaretOpen, setIsCaretOpen] = useState(false);

  const toggleCaret = () => {
    setIsCaretOpen(!isCaretOpen);
  };

  return (
    <div>
      <div className="button-group">
        <button className="btn btn-secondary">Collapse All</button>
        <button className="btn btn-secondary">View Progress</button>
        <button className="btn btn-secondary publish-button">
          <BsFillCheckCircleFill className="green-checkmark" />
          {" "}
          Publish All
          {" "}
          <AiFillCaretDown className="dropdown-icon" />
        </button>
        <button className="btn btn-secondary module-button" style={{ backgroundColor: 'red', color: 'white' }}>
          Module{"  "}
          <AiOutlinePlus className="plus-sign" />
        </button>
        <button className="btn btn-secondary">
          <FaEllipsisV className="vertical-dots-icon" />
        </button>
      </div>

      <div className="horizontal-line"></div>
      <ul className="list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ul className="list-group" key={index}>
              <li className="list-group-item list-group-item-secondary">
                <i
                  style={{ marginRight: 5, cursor: "pointer" }}
                  onClick={toggleCaret}
                >
                  <AiFillCaretDown style={{ transform: isCaretOpen ? "rotate(0deg)" : "rotate(90deg)" }} />
                </i>
                {module.name}
                {/* ... other icons */}
              </li>
              {isCaretOpen && (
                <li className="list-group-item">
                  {module.description}
                </li>
              )}
            </ul>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;