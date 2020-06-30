package com.revature.ReportsService.controller;

<<<<<<< HEAD
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.ReportsService.DataGetterFeign;
=======
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

>>>>>>> f5daf7a519f9f3b3608599fa37162b4d13ecabd8
@RestController
public class DataGeneratorController {
	@Autowired
	DataGetterFeign dataGetterFeign;

	@GetMapping("/DataGenerator")
	public String getAssociatesData() {
		return "data generator" + dataGetterFeign.getData();
	}

	@GetMapping("/hello")
	public String hello() {
		
		return "hello frontend";
	}
	
}
