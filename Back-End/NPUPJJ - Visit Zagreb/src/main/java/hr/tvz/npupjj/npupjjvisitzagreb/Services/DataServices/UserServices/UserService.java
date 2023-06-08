package hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.UserServices;

import hr.tvz.npupjj.npupjjvisitzagreb.Exceptions.UserNotFoundException;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import hr.tvz.npupjj.npupjjvisitzagreb.Repositories.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;


@Service
//@Transactional
public class UserService{

    private final IUserRepo userRepo;
    @Autowired
public UserService(IUserRepo userRepo){
    this.userRepo=userRepo;
}
    public void saveUser(User user) {
        if(user == null){
            throw new RuntimeException("Null User");
        }
        userRepo.save(user);
    }

    public User getUserById(Long id) {
        return userRepo.findById(id).orElseThrow(()
                -> new UserNotFoundException("User by id: " + id + " was not found."));
    }
    public User getUserByCredentials(String email){
        return userRepo.findByEmail(email);
    }
}
