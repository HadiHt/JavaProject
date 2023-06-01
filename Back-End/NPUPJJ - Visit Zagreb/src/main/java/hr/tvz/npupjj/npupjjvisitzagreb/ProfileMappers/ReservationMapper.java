package hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers;

import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.ReservationDto.ReservationReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.ReservationDto.ReservationWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.RestaurantDto.RestaurantReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Reservation;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Restaurant;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ReservationMapper {
    ModelMapper modelMapper;

    @Autowired
    public ReservationMapper(ModelMapper modelMapper){
        this.modelMapper = modelMapper;
    }
    public Reservation mapReservationWriteToReservation(ReservationWriteDto model) {
        return modelMapper.map(model, Reservation.class);
    }
    public ReservationReadDto mapReservationToReservationReadDto(Reservation model){
        return modelMapper.map(model, ReservationReadDto.class);
    }
    public List<ReservationReadDto> mapListReservationToListReservationReadDto(List<Reservation> models){
        ArrayList<ReservationReadDto> returnedList = new ArrayList<>();
        for (Reservation tempRes: models){
            ReservationReadDto x = modelMapper.map(tempRes, ReservationReadDto.class);
            returnedList.add(x);
        }
        return returnedList;
    }
}