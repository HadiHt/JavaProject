package hr.tvz.npupjj.npupjjvisitzagreb;

import hr.tvz.npupjj.npupjjvisitzagreb.Repositories.IUserRepo;
import hr.tvz.npupjj.npupjjvisitzagreb.Repositories.UserRepo;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("hr.tvz.npupjj.npupjjvisitzagreb.Repositories")
public class AppConfig {
    @Bean
    public IUserRepo userRepo() {
        return new UserRepo() {
        };
    }
}
