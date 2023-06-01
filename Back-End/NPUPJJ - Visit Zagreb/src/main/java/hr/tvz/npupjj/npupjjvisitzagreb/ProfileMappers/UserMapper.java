package hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {
    ModelMapper modelMapper;

    @Autowired
    public UserMapper(ModelMapper modelMapper){
        this.modelMapper = modelMapper;
    }
    public User mapUserWriteToUser(UserWriteDto model) {
        return modelMapper.map(model, User.class);
    }
    public UserReadDto mapUserToUserReadDto(User model){
        return modelMapper.map(model, UserReadDto.class);
    }
}