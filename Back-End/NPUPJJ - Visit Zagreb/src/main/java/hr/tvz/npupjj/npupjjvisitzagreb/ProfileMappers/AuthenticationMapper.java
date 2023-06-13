package hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers;

import hr.tvz.npupjj.npupjjvisitzagreb.Models.AuthRequest;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationMapper {
    ModelMapper modelMapper;

    @Autowired
    public AuthenticationMapper(ModelMapper modelMapper){
        this.modelMapper = modelMapper;
    }
    public AuthRequest mapUserToAuthentication(User model) {
        return modelMapper.map(model, AuthRequest.class);
    }
}
