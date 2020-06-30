package com.revature.DataService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableDiscoveryClient
@SpringBootApplication
public class DataServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DataServiceApplication.class, args);
	}
	
	@Bean
    public WebMvcConfigurer configureContent() {
      return new WebMvcConfigurer() {
        @Override
        public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
          configurer.ignoreAcceptHeader(true).defaultContentType(MediaType.APPLICATION_JSON);
        }
      };
	}
	  
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedMethods("GET","POST","PUT","PATCH","DELETE","OPTIONS")
				.allowedHeaders("*");
				
			}
		};
	}
	
	@Bean
    public WebMvcConfigurer configureContent() {
      return new WebMvcConfigurer() {
        @Override
        public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
          configurer.ignoreAcceptHeader(true).defaultContentType(MediaType.APPLICATION_JSON);
        }
      };
	}

}
