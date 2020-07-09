package com.revature.ReportsService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableFeignClients
@EnableDiscoveryClient
@SpringBootApplication
public class ReportsServiceApplication {

  public static void main(String[] args) {
    SpringApplication.run(ReportsServiceApplication.class, args);

  }

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    // We're defining the class we're using inline here as a shortcut
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS").allowedHeaders("*");

      }
    };
  }

}
