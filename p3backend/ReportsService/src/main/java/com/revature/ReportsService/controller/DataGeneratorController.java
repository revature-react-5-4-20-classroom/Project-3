package com.revature.ReportsService.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.ReportsService.DataGetterFeign;

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
