package hr.tvz.npupjj.npupjjvisitzagreb.Controllers;

import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers.UserMapper;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/User")
public class UsersController {

    @Autowired
    UserService userService;
    UserMapper mapper;
    @PostMapping("/CreateUser")
    public ResponseEntity<UserReadDto> createUser(@RequestBody UserWriteDto user){
        userService.saveUser(mapper.mapUserWriteToUser(user));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/User/{id}")
    public ResponseEntity<UserReadDto> getUser(@PathVariable Long id){
        UserReadDto user = mapper.mapUserToUserReadDto(userService.getUserById(id));
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
