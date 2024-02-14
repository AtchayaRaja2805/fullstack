package com.eduadminconnect.atchaya.service;


import com.eduadminconnect.atchaya.dto.request.StudentRequest;
import com.eduadminconnect.atchaya.dto.response.StudentResponse;

import java.util.List;

public interface StudentService {
    List<StudentResponse> getAllStudents();

    StudentResponse getStudentById(Long studentId);

    StudentResponse createStudent(StudentRequest studentRequest);

    StudentResponse updateStudent(Long studentId, StudentRequest studentRequest);

    void deleteStudent(Long studentId);
}
