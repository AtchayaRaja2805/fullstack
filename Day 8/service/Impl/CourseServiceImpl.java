package com.eduadminconnect.atchaya.service.Impl;

import com.eduadminconnect.atchaya.dto.request.CourseRequest;
import com.eduadminconnect.atchaya.dto.response.BasicResponse;
import com.eduadminconnect.atchaya.dto.response.CourseResponse;
import com.eduadminconnect.atchaya.model.Course;
import com.eduadminconnect.atchaya.repository.CourseRepository;
import com.eduadminconnect.atchaya.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public BasicResponse<CourseResponse> getAllCourse() {
        BasicResponse<CourseResponse> response = new BasicResponse<>();
        try {
            List<Course> courses = courseRepository.findAll();
            List<CourseResponse> courseResponses = courses.stream()
                    .map(course -> CourseResponse.builder()
                            .courseId(course.getCourseId())
                            .courseName(course.getCourseName())
                            .courseDescription(course.getCourseDescription())
                            .courseDuration(course.getCourseDuration())
                            .fees(course.getFees())
                            .noOfSeats(course.getNoOfSeats())
                            .build())
                    .collect(Collectors.toList());
            response.setMessage("Courses fetched successfully!!!");
            response.setData(courseResponses);
        } catch (Exception e) {
            response.setMessage("Failed to fetch courses: " + e.getMessage());
        }
        return response;
    }

    @Override
    public CourseResponse createCourse(CourseRequest request) {
        CourseResponse response = new CourseResponse();
        try {
            Course course = new Course();
            course.setCourseName(request.getCourseName());
            course.setCourseDescription(request.getCourseDescription());
            course.setCourseDuration(request.getCourseDuration());
            course.setFees(request.getFees());
            course.setNoOfSeats(request.getNoOfSeats());

            Course savedCourse = courseRepository.save(course);
            response.setMessage("Course created successfully!!!");
            response.setCourseId(savedCourse.getCourseId());
        } catch (Exception e) {
            response.setMessage("Failed to create course: " + e.getMessage());
        }
        return response;
    }

    @Override
    public CourseResponse deleteCourse(String deleteid) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteCourse'");
    }

    // @Override
    // public CourseResponse deleteCourse(String courseId) {
    //     CourseResponse response = new CourseResponse();
    //     try {
    //         courseRepository.deleteById(courseId);
    //         response.setMessage("Course with ID " + courseId + " deleted successfully.");
    //     } catch (Exception e) {
    //         response.setMessage("Failed to delete course: " + e.getMessage());
    //     }
    //     return response;
    // }

}
