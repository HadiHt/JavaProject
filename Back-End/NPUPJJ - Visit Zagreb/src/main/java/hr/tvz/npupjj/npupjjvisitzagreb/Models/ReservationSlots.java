package hr.tvz.npupjj.npupjjvisitzagreb.Models;

public enum ReservationSlots {
    SEVEN_TO_NINE("7-9AM"),
    NINE_TO_ELEVEN("9-11AM"),
    ELEVEN_TO_ONE("11-1DAY"),
    ONE_TO_THREE("1-3PM"),
    THREE_TO_FIVE("3-5PM"),
    FIVE_TO_SEVEN("5-7PM"),
    SEVEN_TO_NINE_PM("7-9PM");

    private final String label;

    private ReservationSlots(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
