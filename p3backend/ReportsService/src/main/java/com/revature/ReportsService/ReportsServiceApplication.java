package com.revature.ReportsService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ReportsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReportsServiceApplication.class, args);
	}

}
