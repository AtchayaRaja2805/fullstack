package com.eduadminconnect.atchaya.service;

import com.eduadminconnect.atchaya.dto.request.InstituteRequest;
import com.eduadminconnect.atchaya.dto.response.InstituteResponse;

import java.util.List;

public interface InstituteService {
    List<InstituteResponse> getAllInstitutes();

    InstituteResponse getInstituteById(Long instituteId);

    InstituteResponse createInstitute(InstituteRequest instituteRequest);

    InstituteResponse updateInstitute(Long instituteId, InstituteRequest instituteRequest);

    void deleteInstitute(Long instituteId);
}
