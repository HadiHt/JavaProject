package hr.tvz.npupjj.npupjjvisitzagreb.Models;


import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.Id;

import java.util.HashSet;
import java.util.Set;

@Entity
public class User {
    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ColumnDefault("1")
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "reservation",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "restaurant_id"))
    private Set<Restaurant> restaurants = new HashSet<>();

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
