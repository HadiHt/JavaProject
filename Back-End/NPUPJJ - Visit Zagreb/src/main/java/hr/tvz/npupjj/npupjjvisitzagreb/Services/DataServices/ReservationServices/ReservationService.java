package hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.ReservationServices;

import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.ReservationDto.ReservationReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Exceptions.ReservationNotFoundException;
import hr.tvz.npupjj.npupjjvisitzagreb.Exceptions.RestaurantNotFoundException;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Reservation;
import hr.tvz.npupjj.npupjjvisitzagreb.Repositories.IReservationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationService{

    private final IReservationRepo reservationRepo;
    @Autowired
    public ReservationService(IReservationRepo reservationRepo){
        this.reservationRepo = reservationRepo;
    }
    public void saveReservation(Reservation reservation) {
        if(reservation == null){
            throw new RuntimeException("Null Reservation");
        }
        reservationRepo.save(reservation);
    }

    public Reservation getReservationById(Long id) {
        return reservationRepo.findById(id).orElseThrow(()
                -> new ReservationNotFoundException("Reservation by id: " + id + " was not found."));
    }


    public List<Reservation> getReservationByUserId(Long id) {
        try{return reservationRepo.findByUser_Id(id);}
        catch(Exception ex){
            new ReservationNotFoundException("Reservation by id: " + id + " was not found.");
            return null;
        }
    }


    public List<Reservation> getReservationByRestaurantId(Long id) {

        try{
            return reservationRepo.findByRestaurant_Id(id);
        }
        catch(Exception ex){
            new ReservationNotFoundException("Reservation by id: " + id + " was not found.");
            return null;
        }
    }

    public List<Reservation> getReservationByRestaurantIdAndDay(Long id, String day) {
        ArrayList<Reservation> returnedList = new ArrayList<>();
        try{
            List<Reservation> allReservations = reservationRepo.findByRestaurant_Id(id);
            for(Reservation reservation: allReservations){
                if(reservation.getTime().contains(day)){
                    returnedList.add(reservation);
                }
            }
            return returnedList;
        }
        catch(Exception ex){
            new ReservationNotFoundException("Reservation by id: " + id + " was not found.");
            return null;
        }
    }
}
