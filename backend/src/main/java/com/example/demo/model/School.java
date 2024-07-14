package com.example.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class School {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Adjust strategy as per your database
    private Long id;
    private String schoolName;
    private String schoolAddress;
    private String schoolPhone;
    private String schoolEmail;
    private String schoolType;
    private String schoolPassword;

    @OneToOne
    private User user;
}
