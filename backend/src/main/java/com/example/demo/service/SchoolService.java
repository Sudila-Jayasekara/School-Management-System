//package com.example.demo.service;
//
//import com.example.demo.dto.SchoolDTO;
//import com.example.demo.exception.ResourceNotFoundException;
//import com.example.demo.model.School;
//import com.example.demo.repo.SchoolRepo;
//import org.modelmapper.ModelMapper;
//import org.modelmapper.TypeToken;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//@Transactional
//public class SchoolService {
//
//    @Autowired
//    private SchoolRepo schoolRepo;
//
//    @Autowired
//    private ModelMapper modelMapper;
//
//
//    public List<SchoolDTO> getAllSchools() {
//        List<School> schools = schoolRepo.findAll();
//        return modelMapper.map(schools, new TypeToken<List<SchoolDTO>>() {}.getType());
//    }
//
//    public SchoolDTO getSchoolById(Long id) {
//        Optional<School> optionalSchool = schoolRepo.findById(id);
//        if(optionalSchool.isPresent()) {
//            return modelMapper.map(optionalSchool.get(), SchoolDTO.class);
//        }else {
//            throw new ResourceNotFoundException("School not found");
//        }
//    }
//
//    public SchoolDTO saveSchool(SchoolDTO schoolDTO) {
//        School school = modelMapper.map(schoolDTO, School.class);
//        schoolRepo.save(school);
//        return modelMapper.map(school, SchoolDTO.class);
//    }
//
//    public SchoolDTO updateSchool(Long id, SchoolDTO schoolDTO) {
//        Optional<School> optionalSchool = schoolRepo.findById(id);
//        if (optionalSchool.isPresent()) {
//            School school = optionalSchool.get();
//            modelMapper.map(schoolDTO, school);
//            school = schoolRepo.save(school);
//            return modelMapper.map(school, SchoolDTO.class);
//        } else {
//            throw new ResourceNotFoundException("School not found with id: " + id);
//        }
//    }
//
//    public void deleteSchool(Long id) {
//        if (schoolRepo.existsById(id)) {
//            schoolRepo.deleteById(id);
//        } else {
//            throw new ResourceNotFoundException("School not found with id: " + id);
//        }
//    }
//}

package com.example.demo.service;

import com.example.demo.dto.SchoolDTO;
import com.example.demo.model.School;
import com.example.demo.model.User;
import com.example.demo.repo.SchoolRepo;
import com.example.demo.repo.UserRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class SchoolService {
    @Autowired
    private SchoolRepo schoolRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<SchoolDTO> getAllSchools() {
        List<School> schoolList = schoolRepo.findAll();
        return modelMapper.map(schoolList, new TypeToken<List<SchoolDTO>>(){}.getType());
    }

    public SchoolDTO getSchoolById(Long id) {
        School school = schoolRepo.findById(id).orElse(null);
        return modelMapper.map(school, SchoolDTO.class);
    }

    public SchoolDTO saveSchool(SchoolDTO schoolDTO){
        // Map SchoolDTO to School entity
        School school = modelMapper.map(schoolDTO, School.class);

        // Create a new User entity
        User user = new User();
        user.setType("school");

        // Save the User entity to generate its ID
        User savedUser = userRepo.save(user);

        // Associate the User entity with the School entity
        school.setUser(savedUser);

        // Save the School entity with the associated User
        School savedSchool = schoolRepo.save(school);

        // Map the saved School entity back to SchoolDTO and return
        return modelMapper.map(savedSchool, SchoolDTO.class);
    }

    public SchoolDTO updateSchool(long id, SchoolDTO schoolDTO){
        School school = schoolRepo.findById(id).orElse(null);
        modelMapper.map(schoolDTO, school);
        return schoolDTO;
    }

    public String deleteSchool(long id){
        schoolRepo.deleteById(id);
        return "id "+id+" deleted";
    }
}