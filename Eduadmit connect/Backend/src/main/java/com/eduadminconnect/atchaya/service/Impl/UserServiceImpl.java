package com.eduadminconnect.atchaya.service.Impl;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.eduadminconnect.atchaya.dto.response.BasicResponse;
import com.eduadminconnect.atchaya.dto.response.UserResponse;

import com.eduadminconnect.atchaya.model.User;
import com.eduadminconnect.atchaya.repository.UserRepository;
import com.eduadminconnect.atchaya.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser(){
        List<User> users = userRepository.findAll();
        List<UserResponse> userResponses = users.stream().map(user-> UserResponse.builder()
            .id(user.getId())
            .name(user.getName())
            .email(user.getEmail())
            .role(user.getRole())
            // .mobileNumber(user.getMobileNumber())
            .build())
            .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
            .message("User data fetched successfully!!!")
            .data(userResponses)
            .build();
    }

}