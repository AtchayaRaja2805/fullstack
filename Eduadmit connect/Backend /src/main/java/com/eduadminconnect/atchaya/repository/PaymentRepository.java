package com.eduadminconnect.atchaya.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.eduadminconnect.atchaya.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
