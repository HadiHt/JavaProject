package hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.ReservationServices;

import hr.tvz.npupjj.npupjjvisitzagreb.Models.Reservation;

import java.util.List;

public interface IReservationService {
    void saveReservation(Reservation reservation);
    Reservation getReservationById(Long id);
    List<Reservation> getReservationByUserId(Long id);
    List<Reservation> getReservationByRestaurantId(Long id);

}
