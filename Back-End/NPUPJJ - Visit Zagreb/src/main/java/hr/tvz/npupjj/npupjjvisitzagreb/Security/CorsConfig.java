package hr.tvz.npupjj.npupjjvisitzagreb.Security;


import org.springframework.context.annotation.*;
import org.springframework.web.cors.*;
import org.springframework.web.filter.*;

import java.util.Arrays;


@Configuration
public class CorsConfig {

    @Bean
public CorsFilter corsFilter() {
 CorsConfiguration corsConfig = new CorsConfiguration();
 corsConfig.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
 corsConfig.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
 corsConfig.setAllowedHeaders(Arrays.asList("*"));


UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
source.registerCorsConfiguration("/**", corsConfig);



return new CorsFilter(source);
}
}