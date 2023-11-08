import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import db from "../Database";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";


function ModuleList() {
  const { courseId } = useParams();
  const [modules, setModules] = useState(db.modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const addModule = (module) => {
    setModules([
      { ...module, _id: new Date().getTime().toString() },
      ...modules,
    ]);
  };
  const deleteModule = (moduleId) => {
    setModules(modules.filter(
      (module) => module._id !== moduleId));

  };
  const updateModule = () => {
    setModules(
      modules.map((m) => {
        if (m._id === module._id) {
          return module;
        } else {
          return m;
        }
      })
    );
  }


  return (
    <div>
      <div className="button-group">
        <button className="btn btn-secondary">Collapse All</button>
        <button className="btn btn-secondary">View Progress</button>
        <button className="btn btn-secondary publish-button">
          <AiOutlineCheckCircle className="green-checkmark1" />
          {" "}
          Publish All
          {" "}
          <AiFillCaretDown className="dropdown-icons" />
        </button>
        <button className="btn btn-secondary module-button" style={{ backgroundColor: 'rgb(187, 11, 11)', color: 'white' }}>
          <AiOutlinePlus className="plus-sign" />
          {"  "} Module
        </button>
        <button className="btn btn-secondary">
          <FaEllipsisV className="vertical-three-dots-icon" />
        </button>
      </div>

      <div className="horizontal-line"></div>

      <li className="list-group-item">
        <div className="add-course-section">
          <input className="new-mod-input" value={module.name}
            onChange={(e) => setModule({
              ...module, name: e.target.value
            })}
          />
          <textarea className="new-description-input" value={module.description}
            onChange={(e) => setModule({
              ...module, description: e.target.value
            })}
          />
          <div className="add-btn">
            <button className="add-button" onClick={() => { addModule(module) }}>Add</button>
            <button className="update-button" onClick={updateModule}> Update </button>

          </div>
        </div>


      </li>

      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ul className="list-group" key={index}>
              <li key={index} className="list-group-item list-group-item-secondary">
                <div className="dropwdown-header">
                  <div  style={{ display: "flex", alignItems: "center" }}>
                    <i style={{ marginRight: 5, cursor: "pointer" }}>
                      <PiDotsSixVerticalBold className="vertical-dots-icon" />
                      <AiFillCaretDown className="dropdown-side-icon" style={{ transform: "rotate(-90deg)" }} />
                    </i>
                    <h3 className="mod-name">{module.name}</h3>
                    </div>
                    <div className="half-dropdown-header">
                      <BsFillCheckCircleFill className="green-checkmark" />
                      <AiFillCaretDown className="dropdown-icon" style={{ "rotate(0deg)": "rotate(90deg)" }} />
                      <AiOutlinePlus className="gray-plus-sign" />
                      <BsThreeDotsVertical className="three-vertical-dots" />
                      <button className="edit-btn" onClick={(event) => { setModule(module); }}> Edit </button>
                      <button className="delete-btn" onClick={() => deleteModule(module._id)}> Delete </button>
                    </div>
                  
                </div>
                <p>{module.description}</p>

              </li>
            </ul>
          ))
      }
    </div>
  );
}
export default ModuleList;


  // import React, { useState } from "react";
  // import { useParams } from "react-router-dom";
  // import "./index.css";
  // import db from "../Database";
  // import { AiFillCaretDown } from "react-icons/ai";
  // import { BsFillCheckCircleFill } from "react-icons/bs";
  // import { AiOutlinePlus } from "react-icons/ai";
  // import { FaEllipsisV } from "react-icons/fa";

  // function ModuleList() {
  //   const { courseId } = useParams();
  //   const modules = db.modules;
  //   const [isCaretOpen, setIsCaretOpen] = useState(false);
  //   const [module, setModule] = useState({
  //     name: "New Module",
  //     description: "New Description",
  //     course: courseId,
  //   });
  //   const toggleCaret = () => {
  //     setIsCaretOpen(!isCaretOpen);
  //   };
  //   const addModule = (module) => {
  //     setIsCaretOpen([
  //       { ...module, _id: new Date().getTime().toString() },
  //       ...modules,
  //     ]);
  //   };

  //   return (
  //     <div>
  //       <div className="button-group">
  //         <button className="btn btn-secondary">Collapse All</button>
  //         <button className="btn btn-secondary">View Progress</button>
  //         <button className="btn btn-secondary publish-button">
  //           <BsFillCheckCircleFill className="green-checkmark" />
  //           {" "}
  //           Publish All
  //           {" "}
  //           <AiFillCaretDown className="dropdown-icon" />
  //         </button>
  //         <button className="btn btn-secondary module-button" style={{ backgroundColor: 'red', color: 'white' }}>
  //           Module{"  "}
  //           <AiOutlinePlus className="plus-sign" />
  //         </button>
  //         <button className="btn btn-secondary">
  //           <FaEllipsisV className="vertical-dots-icon" />
  //         </button>
  //       </div>

  //       <div className="horizontal-line"></div>


  //       <ul className="list-group">
  //         <li className="list-group-item">
  //           <button >Add</button>
  //           <input value={module.name}
  //             onChange={(e) => setModule({
  //               ...module, name: e.target.value
  //             })}
  //           />
  //           <textarea value={module.description}
  //             onChange={(e) => setModule({
  //               ...module, description: e.target.value
  //             })}
  //           />
  //         </li>

  //         {modules
  //           .filter((module) => module.course === courseId)
  //           .map((module, index) => (
  //             <ul className="list-group" key={index}>
  //               <li className="list-group-item list-group-item-secondary">
  //                 <i
  //                   style={{ marginRight: 5, cursor: "pointer" }}
  //                   onClick={toggleCaret}
  //                 >
  //                   <AiFillCaretDown style={{ transform: isCaretOpen ? "rotate(0deg)" : "rotate(90deg)" }} />
  //                 </i>
  //                 {module.name}
  //                 {/* ... other icons */}
  //               </li>
  //               {isCaretOpen && (
  //                 <li className="list-group-item">
  //                   {module.description}
  //                 </li>
  //               )}
  //             </ul>
  //           ))}
  //       </ul>
  //     </div>
  //   );
  // }
  // export default ModuleList;