package com.eduadminconnect.atchaya.service;

import com.eduadminconnect.atchaya.dto.request.LoginRequest;
import com.eduadminconnect.atchaya.dto.request.RegisterRequest;
import com.eduadminconnect.atchaya.dto.response.LoginResponse;
import com.eduadminconnect.atchaya.dto.response.RegisterResponse;

public interface AuthenticationService {
  RegisterResponse register(RegisterRequest request);

  LoginResponse login(LoginRequest request);
}