package com.eduadminconnect.atchaya.repository;

import com.eduadminconnect.atchaya.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
