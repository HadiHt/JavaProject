package hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.RestaurantServices;

import hr.tvz.npupjj.npupjjvisitzagreb.Models.Restaurant;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;

import java.util.List;

public interface IRestaurantService {
    void saveRestaurant(Restaurant restaurant);
    Restaurant getRestaurantById(Long id);
    List<Restaurant> getAllRestaurants();
}
