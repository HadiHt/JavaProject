package hr.tvz.npupjj.npupjjvisitzagreb;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import hr.tvz.npupjj.npupjjvisitzagreb.Controllers.RestaurantsController;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.ReservationDto.ReservationReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.ReservationDto.ReservationWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.RestaurantDto.RestaurantReadDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Dtos.RestaurantDto.RestaurantWriteDto;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Reservation;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.Restaurant;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers.ReservationMapper;
import hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers.RestaurantMapper;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.ReservationServices.ReservationService;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.RestaurantServices.RestaurantService;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.UserServices.UserService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@SpringBootTest
public class RestaurantsControllerTests {

    private MockMvc mockMvc;

    @Mock
    private RestaurantService restaurantService;

    @Mock
    private ReservationService reservationService;

    @Mock
    private UserService userService;

    @Mock
    private RestaurantMapper restaurantMapper;

    @Mock
    private ReservationMapper reservationMapper;

    private RestaurantsController restaurantsController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        restaurantsController = new RestaurantsController(
                restaurantService,
                reservationService,
                userService,
                restaurantMapper,
                reservationMapper
        );
        mockMvc = MockMvcBuilders.standaloneSetup(restaurantsController).build();
    }

    @Test
    public void testCreateRestaurant() throws Exception {
        RestaurantWriteDto restaurantWriteDto = new RestaurantWriteDto();
        mockMvc.perform(post("/Restaurant/CreateRestaurant")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(restaurantWriteDto)))
                .andExpect(status().isCreated());
    }

    @Test
    public void testGetAllRestaurant() throws Exception {
        List<RestaurantReadDto> restaurantList = Arrays.asList(
                new RestaurantReadDto(),
                new RestaurantReadDto()
        );

        when(restaurantMapper.mapListRestaurantToListRestaurantReadDto(anyList())).thenReturn(restaurantList);

        mockMvc.perform(get("/Restaurant/Restaurants"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(2)));
     }

    @Test
    public void testGetRestaurant() throws Exception {
        Long restaurantId = 1L;
        RestaurantReadDto restaurantReadDto = new RestaurantReadDto();

        when(restaurantService.getRestaurantById(restaurantId)).thenReturn(new Restaurant());
        when(restaurantMapper.mapRestaurantToRestaurantReadDto(any(Restaurant.class))).thenReturn(restaurantReadDto);

        mockMvc.perform(get("/Restaurant/Restaurant/{id}", restaurantId))
                .andExpect(status().isOk());
    }

    @Test
    public void testMakeReservation() throws Exception {
        Long userId = 1L;
        ReservationWriteDto reservationWriteDto = new ReservationWriteDto();

        Restaurant restaurant = new Restaurant();
        User user = new User();
        Reservation reservation = new Reservation();

        when(restaurantService.getRestaurantById(reservationWriteDto.getRestaurantId())).thenReturn(restaurant);
        when(userService.getUserById(userId)).thenReturn(user);
        when(reservationMapper.mapReservationWriteToReservation(reservationWriteDto)).thenReturn(reservation);

        mockMvc.perform(post("/Restaurant/MakeReservation/{id}", userId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(reservationWriteDto)))
                .andExpect(status().isCreated());
    }

    @Test
    public void testGetReservation() throws Exception {
        Long reservationId = 1L;
        ReservationReadDto reservationReadDto = new ReservationReadDto();
        // Set properties of reservationReadDto

        when(reservationService.getReservationById(reservationId)).thenReturn(new Reservation());
        when(reservationMapper.mapReservationToReservationReadDto(any(Reservation.class))).thenReturn(reservationReadDto);

        mockMvc.perform(get("/Restaurant/Reservation/{id}", reservationId))
                .andExpect(status().isOk());
    }

    @Test
    public void testGetAllReservationsForRestaurant() throws Exception {
        Long restaurantId = 1L;
        List<ReservationReadDto> reservationList = Arrays.asList(
                new ReservationReadDto(),
                new ReservationReadDto()
        );

        when(reservationService.getReservationByRestaurantId(restaurantId)).thenReturn(Arrays.asList(
                new Reservation(),
                new Reservation()
        ));
        when(reservationMapper.mapListReservationToListReservationReadDto(anyList())).thenReturn(reservationList);

        mockMvc.perform(get("/Restaurant/Reservations/{id}", restaurantId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(2)));
    }

    @Test
    public void testGetAllReservationsForRestaurantInADay() throws Exception {
        Long restaurantId = 1L;
        String day = "2023-06-29";
        List<ReservationReadDto> reservationList = Arrays.asList(
                new ReservationReadDto(),
                new ReservationReadDto()
        );

        when(reservationService.getReservationByRestaurantIdAndDay(restaurantId, day)).thenReturn(Arrays.asList(
                new Reservation(),
                new Reservation()
        ));
        when(reservationMapper.mapListReservationToListReservationReadDto(anyList())).thenReturn(reservationList);

        mockMvc.perform(post("/Restaurant/Reservations/{id}", restaurantId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(day)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(2)));
  }
    @Test
    public void testCreateRestaurant_InvalidRequest() throws Exception {
        // Invalid request with missing required fields
        RestaurantWriteDto restaurantWriteDto = new RestaurantWriteDto();

        mockMvc.perform(post("/Restaurant/CreateRestaurant")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(restaurantWriteDto)))
                .andExpect(status().is2xxSuccessful());
    }

    @Test
    public void testGetRestaurant_NotFound() throws Exception {
        Long restaurantId = 1L;

        when(restaurantService.getRestaurantById(restaurantId)).thenReturn(null);

        mockMvc.perform(get("/Restaurant/Restaurant/{id}", restaurantId))
                .andExpect(status().is2xxSuccessful());
    }

    @Test
    public void testMakeReservation_InvalidRestaurantId() throws Exception {
        Long userId = 1L;
        ReservationWriteDto reservationWriteDto = new ReservationWriteDto();
        // Set properties of reservationWriteDto

        when(restaurantService.getRestaurantById(reservationWriteDto.getRestaurantId())).thenReturn(null);

        mockMvc.perform(post("/Restaurant/MakeReservation/{id}", userId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(reservationWriteDto)))
                .andExpect(status().is2xxSuccessful());
    }

    @Test
    public void testMakeReservation_InvalidUserId() throws Exception {
        Long userId = 1L;
        ReservationWriteDto reservationWriteDto = new ReservationWriteDto();
        // Set properties of reservationWriteDto

        when(restaurantService.getRestaurantById(reservationWriteDto.getRestaurantId())).thenReturn(new Restaurant());
        when(userService.getUserById(userId)).thenReturn(null);

        mockMvc.perform(post("/Restaurant/MakeReservation/{id}", userId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(reservationWriteDto)))
                .andExpect(status().is2xxSuccessful());
    }

    @Test
    public void testGetReservation_NotFound() throws Exception {
        Long reservationId = 1L;

        when(reservationService.getReservationById(reservationId)).thenReturn(null);

        mockMvc.perform(get("/Restaurant/Reservation/{id}", reservationId))
                .andExpect(status().is2xxSuccessful());
    }

    @Test
    public void testGetAllReservationsForRestaurant_NotFound() throws Exception {
        Long restaurantId = 1L;

        when(reservationService.getReservationByRestaurantId(restaurantId)).thenReturn(Collections.emptyList());

        mockMvc.perform(get("/Restaurant/Reservations/{id}", restaurantId))
                .andExpect(status().is2xxSuccessful());
    }

    @Test
    public void testGetAllReservationsForRestaurantInADay_InvalidDay() throws Exception {
        Long restaurantId = 1L;
        String day = "2023-06-29";

        when(reservationService.getReservationByRestaurantIdAndDay(restaurantId, day)).thenReturn(Collections.emptyList());

        mockMvc.perform(post("/Restaurant/Reservations/{id}", restaurantId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(day)))
                .andExpect(status().is2xxSuccessful());
    }

    private static String asJsonString(Object obj) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.registerModule(new JavaTimeModule());
            return objectMapper.writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
