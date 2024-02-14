package com.eduadminconnect.atchaya.service;

import com.eduadminconnect.atchaya.dto.request.PaymentRequest;
import com.eduadminconnect.atchaya.dto.response.PaymentResponse;


public interface PaymentService {
    PaymentResponse makePayment(PaymentRequest paymentRequest);
    PaymentResponse getPaymentById(Long paymentId);
    PaymentResponse updatePayment(Long paymentId, PaymentRequest paymentRequest);
    void deletePayment(Long paymentId);
}