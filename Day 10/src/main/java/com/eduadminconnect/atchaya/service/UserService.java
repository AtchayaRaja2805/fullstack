package com.eduadminconnect.atchaya.service;

import com.eduadminconnect.atchaya.dto.response.BasicResponse;
import com.eduadminconnect.atchaya.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}