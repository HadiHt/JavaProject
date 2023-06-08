package hr.tvz.npupjj.npupjjvisitzagreb.Controllers;

import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers.UserMapper;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.UserServices.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/User")
@CrossOrigin(origins = "http://localhost:4200")
public class UsersController {
    UserService userService;
    UserMapper mapper;
    @Autowired
    public UsersController(UserService userService, UserMapper mapper){
        this.userService = userService;
        this.mapper = mapper;
    }
    @PostMapping("/CreateUser")
    public HttpServletRequest createUser(@RequestBody UserWriteDto user){
        User userReceived = mapper.mapUserWriteToUser(user);
        userService.saveUser(userReceived);

        return null;
    }
    @GetMapping("/User/{id}")
    public ResponseEntity<UserReadDto> getUserByID(@PathVariable Long id){
        User userToSend = userService.getUserById(id);
        UserReadDto user = mapper.mapUserToUserReadDto(userToSend);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @PostMapping("/User")
    public ResponseEntity<UserReadDto> getUserByCredentials(@RequestBody UserWriteDto user){
        try {
            User userToSend = userService.getUserByCredentials(user.getEmail());
            UserReadDto loginUser = mapper.mapUserToUserReadDto(userToSend);
            if(user.getPassword().equals(userToSend.getPassword())){
                return new ResponseEntity<>(loginUser, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch(Exception ex){
            return new ResponseEntity<>(HttpStatus.OK);
        }

    }
}
