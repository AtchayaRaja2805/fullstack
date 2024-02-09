package com.eduadminconnect.atchaya.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduadminconnect.atchaya.model.Institute;

@Repository
public interface InstituteRepository extends JpaRepository<Institute, Long> {

}