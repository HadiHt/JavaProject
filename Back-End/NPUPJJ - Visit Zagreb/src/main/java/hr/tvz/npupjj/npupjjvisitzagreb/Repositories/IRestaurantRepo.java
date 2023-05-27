package hr.tvz.npupjj.npupjjvisitzagreb.Repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Restaurant;

@Repository
public interface IRestaurantRepo extends CrudRepository<Restaurant,Long>{
}
