import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import deleteStudent from "./deleteStudent";


const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/students")
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the students!", error);
      });
  }, []);

  return (
    <div className="student-list-container">
      <Link to="/add">Add Student</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>
                <Link to={`/edit/${student.id}`}>Edit</Link>
                <button onClick={() => deleteStudent(student.id, students, setStudents)}
                style={{ backgroundColor: "blue", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>

                  Delete
                  
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
