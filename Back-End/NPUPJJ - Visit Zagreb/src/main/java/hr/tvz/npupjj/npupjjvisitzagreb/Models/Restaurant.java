package hr.tvz.npupjj.npupjjvisitzagreb.Models;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ColumnDefault("1")
    private Long id;
    private String name;
    private String address;
    private Boolean isReserved;
    @ManyToMany(mappedBy = "restaurants")
    private Set<User> users = new HashSet<>();

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public Boolean getReserved() {
        return isReserved;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setReserved(Boolean reserved) {
        isReserved = reserved;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}
