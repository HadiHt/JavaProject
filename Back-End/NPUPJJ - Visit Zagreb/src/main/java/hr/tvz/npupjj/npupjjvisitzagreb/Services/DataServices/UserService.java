package hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices;

import hr.tvz.npupjj.npupjjvisitzagreb.Exceptions.UserNotFoundException;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import hr.tvz.npupjj.npupjjvisitzagreb.Repositories.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
//@Transactional
public class UserService implements IUserService{

    @Autowired
    IUserRepo userRepo;
    @Override
    public void saveUser(User user) {
        if(user == null){
            throw new RuntimeException("Null User");
        }
        userRepo.save(user);
    }

    @Override
    public User getUserById(Long id) {
        return userRepo.findById(id).orElseThrow(()
                -> new UserNotFoundException("User by id: " + id + " was not found."));
    }
}
