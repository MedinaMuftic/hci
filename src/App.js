import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Subject from "./pages/Subject";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subject/:subject_id" element={<Subject />} />
        <Route path="/quiz/:quiz_id" element={<Quiz />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
