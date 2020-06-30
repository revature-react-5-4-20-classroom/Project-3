package com.revature.ReportsService;
// This interface specifies how to send HTTP requests to the appbook service
// Feign Clients use the same annotations as our Spring Web Controllers do.

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "dataservice")
public interface DataGetterFeign {

	// This will SEND an HTTP req to dataservice
	@GetMapping("/")
	public String getData();

}
