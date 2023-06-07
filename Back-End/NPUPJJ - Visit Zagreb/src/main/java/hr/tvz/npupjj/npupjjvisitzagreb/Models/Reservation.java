package hr.tvz.npupjj.npupjjvisitzagreb.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

@Entity
@NoArgsConstructor
public class Reservation {
    public Reservation(String time, User user, Restaurant restaurant){
        this.time = time;
        this.user = user;
        this.restaurant = restaurant;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ColumnDefault("1")
    private Long id;
    private String time;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
