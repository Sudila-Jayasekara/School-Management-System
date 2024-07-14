package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SchoolDTO {
    private Long id;
    private String schoolName;
    private String schoolAddress;
    private String schoolPhone;
    private String schoolType;
    private String schoolEmail;
    private String schoolPassword;
}
