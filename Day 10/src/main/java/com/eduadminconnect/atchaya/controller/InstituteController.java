package com.eduadminconnect.atchaya.controller;

import static com.eduadminconnect.atchaya.utils.MyConstant.INSTITUTE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eduadminconnect.atchaya.dto.request.InstituteRequest;
import com.eduadminconnect.atchaya.dto.response.InstituteResponse;
import com.eduadminconnect.atchaya.service.InstituteService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping(INSTITUTE)
@RequiredArgsConstructor
public class InstituteController {

    @Autowired
    private InstituteService instituteService;

    @GetMapping
    public ResponseEntity<List<InstituteResponse>> getAllInstitutes() {
        List<InstituteResponse> institutes = instituteService.getAllInstitutes();
        return ResponseEntity.ok(institutes);
    }

    @GetMapping("/{instituteId}")
    public ResponseEntity<InstituteResponse> getInstitute(@PathVariable Long instituteId) {
        InstituteResponse institute = instituteService.getInstituteById(instituteId);
        return ResponseEntity.ok(institute);
    }

    @PostMapping
    public ResponseEntity<InstituteResponse> createInstitute(@RequestBody InstituteRequest instituteRequest) {
        InstituteResponse createdInstitute = instituteService.createInstitute(instituteRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdInstitute);
    }

    @PutMapping("/{instituteId}")
    public ResponseEntity<InstituteResponse> updateInstitute(@PathVariable Long instituteId, @RequestBody InstituteRequest instituteRequest) {
        InstituteResponse updatedInstitute = instituteService.updateInstitute(instituteId, instituteRequest);
        return ResponseEntity.ok(updatedInstitute);
    }

    @DeleteMapping("/{instituteId}")
    public ResponseEntity<Void> deleteInstitute(@PathVariable Long instituteId) {
        instituteService.deleteInstitute(instituteId);
        return ResponseEntity.noContent().build();
    }
}
