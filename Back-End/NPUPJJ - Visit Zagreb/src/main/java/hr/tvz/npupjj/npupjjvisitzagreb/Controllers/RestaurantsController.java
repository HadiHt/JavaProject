package hr.tvz.npupjj.npupjjvisitzagreb.Controllers;

import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.ReservationDto.ReservationReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.ReservationDto.ReservationWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.RestaurantDto.RestaurantReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.RestaurantDto.RestaurantWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Reservation;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Restaurant;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers.ReservationMapper;
import hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers.RestaurantMapper;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.ReservationServices.ReservationService;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.RestaurantServices.RestaurantService;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.UserServices.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Restaurant")
public class RestaurantsController {

    RestaurantService restaurantService;
    ReservationService reservationService;
    UserService userService;
    RestaurantMapper restaurantMapper;
    ReservationMapper reservationMapper;
    @Autowired
    public RestaurantsController(RestaurantService restaurantService, ReservationService reservationService, UserService userService, RestaurantMapper restaurantMapper, ReservationMapper reservationMapper){
        this.restaurantService = restaurantService;
        this.reservationService = reservationService;
        this.userService = userService;
        this.restaurantMapper = restaurantMapper;
        this.reservationMapper = reservationMapper;
    }
    @PostMapping("/CreateRestaurant")
    public ResponseEntity createRestaurant(@RequestBody RestaurantWriteDto restaurant){
        Restaurant restaurantReceived = restaurantMapper.mapRestaurantWriteToRestaurant(restaurant);
        restaurantService.saveRestaurant(restaurantReceived);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/Restaurants")
    public ResponseEntity<List<RestaurantReadDto>> getAllRestaurant(){
        List<Restaurant> restaurantsToSend = restaurantService.getAllRestaurants();
        List<RestaurantReadDto> restaurant = restaurantMapper.mapListRestaurantToListRestaurantReadDto(restaurantsToSend);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }
    @GetMapping("/Restaurant/{id}")
    public ResponseEntity<RestaurantReadDto> getRestaurant(@PathVariable Long id){
        Restaurant restaurantToSend = restaurantService.getRestaurantById(id);
        RestaurantReadDto restaurant = restaurantMapper.mapRestaurantToRestaurantReadDto(restaurantToSend);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }
    //id is UserID
    //body contain RestaurantID
    @PostMapping("/MakeReservation/{id}")
    public ResponseEntity makeReservation(@PathVariable Long id,@RequestBody ReservationWriteDto reservation){
        Restaurant restaurant = restaurantService.getRestaurantById(reservation.getRestaurantId());
        User user = userService.getUserById(id);
        Reservation makeReservation = new Reservation(reservation.getTime(),user,restaurant);
        reservationService.saveReservation(makeReservation);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/Reservation/{id}")
    public ResponseEntity<ReservationReadDto> getReservation(@PathVariable Long id){
        Reservation reservationToSend = reservationService.getReservationById(id);
        ReservationReadDto reservation = reservationMapper.mapReservationToReservationReadDto(reservationToSend);
        return new ResponseEntity<>(reservation, HttpStatus.OK);
    }
    //id is RestaurantID
    @GetMapping("/Reservations/{id}")
    public ResponseEntity<List<ReservationReadDto>> getAllReservationsForRestaurant(@PathVariable Long id){
        List<Reservation> reservationsToSend = reservationService.getReservationByRestaurantId(id);
        List<ReservationReadDto> reservations = reservationMapper.mapListReservationToListReservationReadDto(reservationsToSend);
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }
    @PostMapping("/Reservations/{id}")
    public ResponseEntity<List<ReservationReadDto>> getAllReservationsForRestaurantInADay(@PathVariable Long id,@RequestBody String day){
        List<Reservation> reservationsToSend = reservationService.getReservationByRestaurantIdAndDay(id,day.replace("\"",""));
        List<ReservationReadDto> reservations = reservationMapper.mapListReservationToListReservationReadDto(reservationsToSend);
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }
}
