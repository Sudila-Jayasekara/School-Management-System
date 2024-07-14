//package com.example.demo.controller;
//
//import com.example.demo.dto.SchoolDTO;
//import com.example.demo.service.SchoolService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@CrossOrigin
//@RequestMapping(value = "/api/v1/schools")
//public class SchoolController {
//
//    @Autowired
//    private SchoolService schoolService;
//
//    @GetMapping
//    public ResponseEntity<List<SchoolDTO>> getAllSchools() {
//        List<SchoolDTO> schools = schoolService.getAllSchools();
//        return ResponseEntity.ok(schools);
//    }
//
//    @GetMapping("/{schoolId}")
//    public ResponseEntity<SchoolDTO> getSchoolById(@PathVariable Long schoolId) {
//        SchoolDTO school = schoolService.getSchoolById(schoolId);
//        return ResponseEntity.ok(school);
//    }
//
//    @PostMapping
//    public ResponseEntity<SchoolDTO> addSchool(@RequestBody SchoolDTO schoolDTO) {
//        SchoolDTO savedSchool = schoolService.saveSchool(schoolDTO);
//        return ResponseEntity.status(HttpStatus.CREATED).body(savedSchool);
//    }
//
//    @PutMapping("/{schoolId}")
//    public ResponseEntity<SchoolDTO> updateSchool(@PathVariable Long schoolId, @RequestBody SchoolDTO schoolDTO) {
//        SchoolDTO updatedSchool = schoolService.updateSchool(schoolId, schoolDTO);
//        return ResponseEntity.ok(updatedSchool);
//    }
//
//    @DeleteMapping("/{schoolId}")
//    public ResponseEntity<Void> deleteSchool(@PathVariable Long schoolId) {
//        schoolService.deleteSchool(schoolId);
//        return ResponseEntity.noContent().build();
//    }
//}

package com.example.demo.controller;

import com.example.demo.dto.SchoolDTO;
import com.example.demo.model.School;
import com.example.demo.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1/schools")
public class SchoolController {
    @Autowired
    private SchoolService schoolService;

    @GetMapping
    public List<SchoolDTO> getAllSchools() {
        return schoolService.getAllSchools();
    }

    @GetMapping("/{schoolId}")
    public SchoolDTO getSchoolById(@PathVariable Long schoolId) {
        return schoolService.getSchoolById(schoolId);
    }

    @PostMapping
    public SchoolDTO saveSchool(@RequestBody SchoolDTO schoolDTO){
        return schoolService.saveSchool(schoolDTO);
    }

    @PutMapping("/{schoolId}")
    public SchoolDTO updateSchool(@PathVariable Long schoolId, @RequestBody SchoolDTO schoolDTO){
        return schoolService.updateSchool(schoolId, schoolDTO);
    }

    @DeleteMapping("/{schoolId}")
    public String deleteSchool(@PathVariable Long schoolId){
        return schoolService.deleteSchool(schoolId);
    }
}