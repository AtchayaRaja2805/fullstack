package com.eduadminconnect.atchaya.service.Impl;



import static com.eduadminconnect.atchaya.enumerated.Role.USER;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.eduadminconnect.atchaya.dto.request.LoginRequest;
import com.eduadminconnect.atchaya.dto.request.RegisterRequest;
import com.eduadminconnect.atchaya.dto.response.LoginResponse;
import com.eduadminconnect.atchaya.dto.response.RegisterResponse;
import com.eduadminconnect.atchaya.model.User;
import com.eduadminconnect.atchaya.repository.UserRepository;
import com.eduadminconnect.atchaya.service.AuthenticationService;
import com.eduadminconnect.atchaya.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public RegisterResponse register(RegisterRequest request){
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent()){
            return RegisterResponse.builder().message("User with mail id "+ request.getEmail() + " is already exists!").build();
        }
        var user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(USER)
                .build();
        userRepository.save(user);
        return RegisterResponse.builder()
                .message("User created successfully!")
                .build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager
            .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtUtil.generateToken(user);
        return LoginResponse.builder()
        .message("User logged in successfully!")
        .token(token)
        .build();
    }
}