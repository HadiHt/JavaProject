package hr.tvz.npupjj.npupjjvisitzagreb.Dtos.RestaurantDto;

public class RestaurantReadDto {
    private String name;
    private String address;
    private Boolean isReserved;

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public Boolean getReserved() {
        return isReserved;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setReserved(Boolean reserved) {
        isReserved = reserved;
    }
}
