import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Labs</h1>
        <Nav/>
        {/* <Link to="a3">Assignment 3</Link>
        <Link to="a4">Assignment 4</Link> */}
        <Routes>
          <Route path="/" element={<Navigate to="a3" />} />
          {/* <Route path="/" element={<Assignment3 />} /> */}
          <Route path="a3/*" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
        </Routes>
        {/* <Assignment3 />
      <Assignment4 />
      <Assignment5 /> */}
      </div>
    </Provider>
  );
}

export default Labs;

// import Nav from "../Nav";
// import Assignment3 from "./a3";
// function Labs() {
//    return (
//       <div>
//          <Nav/>
//          <Assignment3 />
//       </div>
//    );
// }
// export default Labs;