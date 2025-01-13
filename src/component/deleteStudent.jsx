import axios from "axios";

const deleteStudent = async (id, students, setStudents) => {
  try {
    await axios.delete(`http://localhost:8080/api/students/${id}`);
    setStudents(students.filter(student => student.id !== id));
  } catch (error) {
    console.error("There was an error deleting the student!", error);
  }
};

export default deleteStudent;
