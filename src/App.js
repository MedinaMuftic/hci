import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import SignUp from "./pages/SignUp";
import Subject from "./pages/Subject";

function App() {
  if (!localStorage.getItem("user")) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="App">
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/subject/:subject_id" element={<Subject />} />
          <Route path="/quiz/:quiz_id" element={<Quiz />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
