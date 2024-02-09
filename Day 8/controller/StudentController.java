package com.eduadminconnect.atchaya.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.eduadminconnect.atchaya.dto.request.StudentRequest;
import com.eduadminconnect.atchaya.dto.response.StudentResponse;
import com.eduadminconnect.atchaya.service.StudentService;

import static com.eduadminconnect.atchaya.utils.MyConstant.STUDENT;

import java.util.List;

@RestController
@RequestMapping(STUDENT)
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public ResponseEntity<List<StudentResponse>> getAllStudents() {
        List<StudentResponse> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    @GetMapping("/{studentId}")
    public ResponseEntity<StudentResponse> getStudent(@PathVariable Long studentId) {
        StudentResponse student = studentService.getStudentById(studentId);
        return ResponseEntity.ok(student);
    }

    @PostMapping
    public ResponseEntity<StudentResponse> createStudent(@RequestBody StudentRequest studentRequest) {
        StudentResponse createdStudent = studentService.createStudent(studentRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdStudent);
    }

    @PutMapping("/{studentId}")
    public ResponseEntity<StudentResponse> updateStudent(@PathVariable Long studentId, @RequestBody StudentRequest studentRequest) {
        StudentResponse updatedStudent = studentService.updateStudent(studentId, studentRequest);
        return ResponseEntity.ok(updatedStudent);
    }

    @DeleteMapping("/{studentId}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long studentId) {
        studentService.deleteStudent(studentId);
        return ResponseEntity.noContent().build();
    }
}
