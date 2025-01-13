import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentList from "./component/StudentList";
import AddStudent from "./component/AddStudent";
import EditStudent from "./component/EditStudent";
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Student Management</h1>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
