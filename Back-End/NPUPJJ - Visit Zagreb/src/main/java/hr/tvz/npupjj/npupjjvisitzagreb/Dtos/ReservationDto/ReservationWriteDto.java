package hr.tvz.npupjj.npupjjvisitzagreb.Dtos.ReservationDto;

import hr.tvz.npupjj.npupjjvisitzagreb.Models.Restaurant;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;

public class ReservationWriteDto {
    private String time;
    private Long restaurantId;

    public String getTime() {
        return time;
    }

    public Long getRestaurantId() {
        return restaurantId;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setRestaurantId(Long restaurantId) {
        this.restaurantId = restaurantId;
    }
}
