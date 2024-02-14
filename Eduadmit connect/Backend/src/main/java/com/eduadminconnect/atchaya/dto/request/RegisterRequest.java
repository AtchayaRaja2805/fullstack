package com.eduadminconnect.atchaya.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
  private String name;
  private String email;
  private String password;
  private String confirmpassword;
  private String contactnumber;
  private String role;
}