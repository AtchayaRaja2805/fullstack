package com.eduadminconnect.atchaya.config;

import static com.eduadminconnect.atchaya.enumerated.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.eduadminconnect.atchaya.model.User;
import com.eduadminconnect.atchaya.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component 
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;


  @Override
  public void run(String... args) throws Exception {
    if(userRepository.count()>0){
      return;
    }
    var user = User.builder()
            .name("Admin")
            .email("admin123@gmail.com")
            .password(passwordEncoder.encode("admin@123"))
            .role(ADMIN)
            .build();

    userRepository.save(user);

  }

}