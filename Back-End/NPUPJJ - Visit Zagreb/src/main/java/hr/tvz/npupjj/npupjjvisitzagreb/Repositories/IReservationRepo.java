package hr.tvz.npupjj.npupjjvisitzagreb.Repositories;

import hr.tvz.npupjj.npupjjvisitzagreb.Models.Reservation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IReservationRepo extends CrudRepository<Reservation,Long> {
    List<Reservation> findByUser_Id(Long userId);
    List<Reservation> findByRestaurant_Id(Long restaurantId);
}
