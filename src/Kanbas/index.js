import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import {Link} from "react-router-dom";
function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <h1>Kanbas Navigation</h1>
      </div>
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>

      </div>
    </div>
  );
}
export default Kanbas;

