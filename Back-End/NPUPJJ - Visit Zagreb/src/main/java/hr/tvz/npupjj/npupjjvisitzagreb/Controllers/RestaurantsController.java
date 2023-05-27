package hr.tvz.npupjj.npupjjvisitzagreb.Controllers;

import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.RestaurantDto.RestaurantReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.RestaurantDto.RestaurantWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Restaurant;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers.RestaurantMapper;
import hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers.UserMapper;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.RestaurantServices.RestaurantService;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.UserServices.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Restaurant")
public class RestaurantsController {

    RestaurantService restaurantService;
    RestaurantMapper mapper;
    @Autowired
    public RestaurantsController(RestaurantService restaurantService, RestaurantMapper mapper){
        this.restaurantService = restaurantService;
        this.mapper = mapper;
    }
    @PostMapping("/CreateRestaurant")
    public ResponseEntity createRestaurant(@RequestBody RestaurantWriteDto restaurant){
        Restaurant restaurantReceived = mapper.mapRestaurantWriteToRestaurant(restaurant);
        restaurantService.saveRestaurant(restaurantReceived);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/Restaurant/{id}")
    public ResponseEntity<RestaurantReadDto> getRestaurant(@PathVariable Long id){
        Restaurant restaurantToSend = restaurantService.getRestaurantById(id);
        RestaurantReadDto restaurant = mapper.mapRestaurantToRestaurantReadDto(restaurantToSend);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }
}
