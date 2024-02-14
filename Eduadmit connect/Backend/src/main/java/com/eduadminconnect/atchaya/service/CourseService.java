package com.eduadminconnect.atchaya.service;

import com.eduadminconnect.atchaya.dto.request.CourseRequest;
import com.eduadminconnect.atchaya.dto.response.BasicResponse;
import com.eduadminconnect.atchaya.dto.response.CourseResponse;

public interface CourseService {
    BasicResponse<CourseResponse> getAllCourse();
    CourseResponse createCourse(CourseRequest request);
    CourseResponse deleteCourse(String deleteid);
}
