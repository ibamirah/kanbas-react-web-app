import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
// import {Link} from "react-router-dom";
function Kanbas() {
  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;

