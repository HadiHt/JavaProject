package hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers;

import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.ReservationDto.ReservationReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.RestaurantDto.RestaurantReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.RestaurantDto.RestaurantWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Reservation;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Restaurant;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RestaurantMapper {
    ModelMapper modelMapper;

    @Autowired
    public RestaurantMapper(ModelMapper modelMapper){
        this.modelMapper = modelMapper;
    }
    public Restaurant mapRestaurantWriteToRestaurant(RestaurantWriteDto model) {
        return modelMapper.map(model, Restaurant.class);
    }
    public RestaurantReadDto mapRestaurantToRestaurantReadDto(Restaurant model){
        return modelMapper.map(model, RestaurantReadDto.class);
    }
    public List<RestaurantReadDto> mapListRestaurantToListRestaurantReadDto(List<Restaurant> models){
        ArrayList<RestaurantReadDto> returnedList = new ArrayList<>();
        for (Restaurant tempRes: models){
            RestaurantReadDto x = modelMapper.map(tempRes, RestaurantReadDto.class);
            returnedList.add(x);
        }
        return returnedList;
    }
}
