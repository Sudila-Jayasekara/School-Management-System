package com.example.demo.service;

import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;
import com.example.demo.repo.UserRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<UserDTO> getAllUsers(){
        List<User> userList = userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDTO>>() {}.getType());
    }

    public UserDTO getUserById(long id){
        User user = userRepo.findById(id).orElse(null);
        return modelMapper.map(user, UserDTO.class);
    }

    public UserDTO saveUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    public UserDTO updateUser(long id, UserDTO userDTO){
        User user = userRepo.findById(id).orElse(null);
        modelMapper.map(userDTO, user);
        return userDTO;
    }
    public String deleteUser(long userId){
        userRepo.deleteById(userId);
        return "success";
    }

}
