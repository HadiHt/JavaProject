package hr.tvz.npupjj.npupjjvisitzagreb;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import hr.tvz.npupjj.npupjjvisitzagreb.Controllers.UsersController;
import hr.tvz.npupjj.npupjjvisitzagreb.Models.User;
import hr.tvz.npupjj.npupjjvisitzagreb.ProfileMappers.UserMapper;
import hr.tvz.npupjj.npupjjvisitzagreb.Security.JwtFilter;
import hr.tvz.npupjj.npupjjvisitzagreb.Security.JwtUtil;
import hr.tvz.npupjj.npupjjvisitzagreb.Services.DataServices.UserServices.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class UsersControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private UserService userService;

    @Mock
    private UserMapper userMapper;

    @Mock
    private JwtFilter jwtFilter;

    @Mock
    private JwtUtil jwtUtil;

    @InjectMocks
    private UsersController usersController;

    @Test
    public void testCreateUser() throws Exception {
        mockMvc.perform(post("/User/CreateUser")
                        .content("{\"username\": \"test\", \"password\": \"password\"}")
                        .contentType("application/json"))
                .andExpect(status().isOk());
    }

    @Test
    public void testGetUserByID() throws Exception {
        mockMvc.perform(get("/User/{id}", 1L))
                .andExpect(status().isForbidden());
    }

    @Test
    public void testGetUserByCredentials() throws Exception {
        mockMvc.perform(post("/User/User")
                        .content("{\"email\": \"test@test.com\", \"password\": \"password\"}")
                        .contentType("application/json")
                        .with(user("admin").password("password").roles("USER", "ADMIN")))
                .andExpect(status().isOk());
    }

    @Test
    public void testCreateUser_InvalidInput() throws Exception {
        mockMvc.perform(post("/User/CreateUser")
                        .content("{\"username\": \"\", \"password\": \"\"}")
                        .contentType("application/json"))
                .andExpect(status().is2xxSuccessful());
    }

    @Test
    public void testGetUserByID_UserNotFound() throws Exception {
        when(userService.getUserById(any(Long.class))).thenReturn(null);

        mockMvc.perform(get("/User/{id}", 1))
                .andExpect(status().is4xxClientError());
    }

    @Test
    public void testGetUserByCredentials_InvalidCredentials() throws Exception {
        when(userService.getUserByCredentials(any(String.class))).thenReturn(null);

        mockMvc.perform(post("/User/User")
                        .content("{\"email\": \"test@test.com\", \"password\": \"password\"}")
                        .contentType("application/json")
                        .with(user("admin").password("password").roles("USER", "ADMIN")))
                .andExpect(status().is2xxSuccessful());
    }

    @Test
    public void testGetUserByCredentials_PasswordMismatch() throws Exception {
        User user = new User();
        user.setEmail("test@test.com");
        user.setPassword("hashed_password"); // Set a different hashed password here

        when(userService.getUserByCredentials(any(String.class))).thenReturn(user);

        mockMvc.perform(post("/User/User")
                        .content("{\"email\": \"test@test.com\", \"password\": \"password\"}")
                        .contentType("application/json")
                        .with(user("admin").password("password").roles("USER", "ADMIN")))
                .andExpect(status().is2xxSuccessful());
    }

}
