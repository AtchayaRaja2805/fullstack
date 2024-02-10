package com.eduadminconnect.atchaya.repository;

import com.eduadminconnect.atchaya.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}
