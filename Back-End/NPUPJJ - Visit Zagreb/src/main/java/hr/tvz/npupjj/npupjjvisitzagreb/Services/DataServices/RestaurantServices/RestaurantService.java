package hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.RestaurantServices;

import hr.tvz.npupjj.npupjjvisitzagreb.Exceptions.RestaurantNotFoundException;
import hr.tvz.npupjj.npupjjvisitzagreb.Exceptions.UserNotFoundException;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Restaurant;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import hr.tvz.npupjj.npupjjvisitzagreb.Repositories.IRestaurantRepo;
import hr.tvz.npupjj.npupjjvisitzagreb.Repositories.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService{
    private final IRestaurantRepo restaurantRepo;
    @Autowired
    public RestaurantService(IRestaurantRepo restaurantRepo){
        this.restaurantRepo = restaurantRepo;
    }
    public void saveRestaurant(Restaurant restaurant) {
        if(restaurant == null){
            throw new RuntimeException("Null Restaurant");
        }
        restaurantRepo.save(restaurant);
    }
    public Restaurant getRestaurantById(Long id) {
        return restaurantRepo.findById(id).orElseThrow(()
                -> new RestaurantNotFoundException("Restaurant by id: " + id + " was not found."));
    }

    public List<Restaurant> getAllRestaurants() {
        return null;
    }
}
