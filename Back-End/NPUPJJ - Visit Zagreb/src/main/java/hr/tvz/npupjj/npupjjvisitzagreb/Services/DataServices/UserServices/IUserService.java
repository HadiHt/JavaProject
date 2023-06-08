package hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.UserServices;

import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;

public interface IUserService {
    void saveUser(User user);
    User getUserById(Long id);
    User getUserByEmail(String email);

}
