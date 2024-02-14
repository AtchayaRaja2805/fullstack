package com.eduadminconnect.atchaya.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentId;

    @OneToOne
    private User user;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String dob;
    @Column(nullable = false)
    private String gender;
    @Column(nullable = false)
    private String motherName;
    @Column(nullable = false)
    private String fatherName;
    @Column(nullable = false)
    private String nationality;
    @Column(nullable = false)
    private Long age;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private String mobile;
    @Column(nullable = false)
    private int marksSSLC;
    @Column(nullable = false)
    private int marksHSC;
    @Column(nullable = false)
    private int marksDiploma;
    @Column(nullable = false)
    private String eligibility;

    // Getters and Setters
    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public Long getAge() {
        return age;
    }

    public void setAge(Long age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public int getMarksSSLC() {
        return marksSSLC;
    }

    public void setMarksSSLC(int marksSSLC) {
        this.marksSSLC = marksSSLC;
    }

    public int getMarksHSC() {
        return marksHSC;
    }

    public void setMarksHSC(int marksHSC) {
        this.marksHSC = marksHSC;
    }

    public int getMarksDiploma() {
        return marksDiploma;
    }

    public void setMarksDiploma(int marksDiploma) {
        this.marksDiploma = marksDiploma;
    }

    public String getEligibility() {
        return eligibility;
    }

    public void setEligibility(String eligibility) {
        this.eligibility = eligibility;
    }
}
