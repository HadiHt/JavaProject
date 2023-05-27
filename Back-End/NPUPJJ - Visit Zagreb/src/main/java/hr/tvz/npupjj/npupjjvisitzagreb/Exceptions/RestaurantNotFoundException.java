package hr.tvz.npupjj.npupjjvisitzagreb.Exceptions;

public class RestaurantNotFoundException extends RuntimeException{
    public RestaurantNotFoundException(String message) {
        super(message);
    }
}