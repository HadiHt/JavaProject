package hr.tvz.npupjj.npupjjvisitzagreb.Dtos.ReservationDto;

import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.RestaurantDto.RestaurantReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Restaurant;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class ReservationReadDto {
    private String time;
    private UserReadDto user;
    private RestaurantReadDto restaurant;

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public UserReadDto getUser() {
        return user;
    }

    public void setUser(UserReadDto user) {
        this.user = user;
    }

    public RestaurantReadDto getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(RestaurantReadDto restaurant) {
        this.restaurant = restaurant;
    }
}
