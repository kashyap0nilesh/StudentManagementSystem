// src/components/EditStudent.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({ name: "", age: "", grade: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/students/${id}`)
      .then(response => {
        setStudent(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the student!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/students/${id}`, student)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        console.error("There was an error updating the student!", error);
      });
  };

  return (
    <div>
      <h2>Edit Student</h2>
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
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
