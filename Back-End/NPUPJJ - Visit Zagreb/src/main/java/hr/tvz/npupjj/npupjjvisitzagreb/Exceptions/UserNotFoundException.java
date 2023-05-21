package hr.tvz.npupjj.npupjjvisitzagreb.Exceptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String message) {
        super(message);
    }
}
