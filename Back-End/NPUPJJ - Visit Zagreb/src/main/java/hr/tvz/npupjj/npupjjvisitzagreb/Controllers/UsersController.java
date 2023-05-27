package hr.tvz.npupjj.npupjjvisitzagreb.Controllers;

import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers.UserMapper;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/User")
public class UsersController {


    UserService userService;
    UserMapper mapper;
    @Autowired
    public UsersController(UserService userService, UserMapper mapper){
        this.userService = userService;
        this.mapper = mapper;
    }
    @PostMapping("/CreateUser")
    public ResponseEntity createUser(@RequestBody UserWriteDto user){
        System.out.println(user.toString());

        User userr = mapper.mapUserWriteToUser(user);
        userService.saveUser(userr);
        //userService.saveUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/User/{id}")
    public ResponseEntity<UserReadDto> getUser(@PathVariable Long id){
        User userr = userService.getUserById(id);
        UserReadDto user = mapper.mapUserToUserReadDto(userr);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
