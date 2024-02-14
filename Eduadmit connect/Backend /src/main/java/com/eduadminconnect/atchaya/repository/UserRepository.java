package com.eduadminconnect.atchaya.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduadminconnect.atchaya.model.User;

public interface UserRepository extends JpaRepository<User,String>{

    Optional<User> findByEmail(String email);

}