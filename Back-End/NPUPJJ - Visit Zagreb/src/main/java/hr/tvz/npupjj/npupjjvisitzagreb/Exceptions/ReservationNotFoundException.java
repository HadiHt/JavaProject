package hr.tvz.npupjj.npupjjvisitzagreb.Exceptions;

public class ReservationNotFoundException extends RuntimeException{
    public ReservationNotFoundException(String message) {
        super(message);
    }
}