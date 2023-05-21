package hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.UserDto.UserWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import org.modelmapper.ModelMapper;
public class UserMapper {
    private ModelMapper modelMapper = new ModelMapper();

    public User mapUserWriteToUser(UserWriteDto model) {
        return modelMapper.map(model, User.class);
    }
    public UserReadDto mapUserToUserReadDto(User model){
        return modelMapper.map(model, UserReadDto.class);
    }
}
