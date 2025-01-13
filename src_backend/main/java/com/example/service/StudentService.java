package com.example.service;

import com.example.entity.Student;
import com.example.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    
    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    
    public Optional<Student> updateStudent(Long id, Student student) {
        if (studentRepository.existsById(id)) {
            student.setId(id);
            return Optional.of(studentRepository.save(student));
        }
        return Optional.empty();
    }

    
    public boolean deleteStudent(Long id) {
        if (studentRepository.existsById(id)) {
            studentRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
