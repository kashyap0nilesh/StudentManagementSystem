import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({ name: "", age: "", grade: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/students", student)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        console.error("There was an error adding the student!", error);
      });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={student.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Grade:</label>
          <input
            type="text"
            name="grade"
            value={student.grade}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
