package hr.tvz.npupjj.npupjjvisitzagreb.Repositories;

import org.springframework.data.repository.CrudRepository;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepo extends CrudRepository<User,Long>{

}



