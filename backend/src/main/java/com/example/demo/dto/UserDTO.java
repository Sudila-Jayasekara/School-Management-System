package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor //create default constructor
@AllArgsConstructor  //overload constructor
public class UserDTO {
    private Long id;
    private String type;
}
