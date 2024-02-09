package com.eduadminconnect.atchaya.controller;

import com.eduadminconnect.atchaya.dto.request.CourseRequest;
import com.eduadminconnect.atchaya.dto.response.BasicResponse;
import com.eduadminconnect.atchaya.dto.response.CourseResponse;
import com.eduadminconnect.atchaya.service.CourseService;

import lombok.RequiredArgsConstructor;

import static com.eduadminconnect.atchaya.utils.MyConstant.COURSE;
import static com.eduadminconnect.atchaya.utils.MyConstant.COURSEDELETE;
import static com.eduadminconnect.atchaya.utils.MyConstant.COURSELIST;
import static com.eduadminconnect.atchaya.utils.MyConstant.CREATECOURSE;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(COURSE)
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @GetMapping(COURSELIST) 
    public ResponseEntity<BasicResponse<CourseResponse>> getAllCourses() {
        BasicResponse<CourseResponse> response = new BasicResponse<>();
        try {
            response = courseService.getAllCourse();
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping(CREATECOURSE) 
    public ResponseEntity<CourseResponse> createCourse(@RequestBody CourseRequest request) {
        CourseResponse response = new CourseResponse();
        try {
            response = courseService.createCourse(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @DeleteMapping(COURSEDELETE+"/{courseid}")
    // public ResponseEntity<BasicResponse<CourseResponse>> deleteBooking(@PathVariable String deleteid) {
    //     BasicResponse<CourseResponse> response = new BasicResponse<>();
    //     try {
    //         CourseResponse deletedCourseResponse = courseService.deleteCourse(deleteid);
    //         response.setMessage(deletedCourseResponse.getMessage());
    //         return new ResponseEntity<>(response, HttpStatus.OK);
    //     } catch (Exception e) {
    //         response.setMessage("Failed to delete booking: " + e.getMessage());
    //         return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
}