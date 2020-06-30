package com.revature.ReportsService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
<<<<<<< HEAD
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
=======

>>>>>>> f5daf7a519f9f3b3608599fa37162b4d13ecabd8
@EnableDiscoveryClient
@SpringBootApplication
public class ReportsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReportsServiceApplication.class, args);
	}

}
