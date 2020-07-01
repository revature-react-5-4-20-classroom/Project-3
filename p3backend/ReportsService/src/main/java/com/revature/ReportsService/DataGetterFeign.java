package com.revature.ReportsService;
// This interface specifies how to send HTTP requests to the appbook service
// Feign Clients use the same annotations as our Spring Web Controllers do.

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import com.revature.ReportsService.models.Associate;

// @FeignClient make the client. name should be the name of the spring application we're sending
// requests to
@FeignClient(name = "dataservice")
public interface DataGetterFeign {

	// This will SEND an HTTP req to /books/3 on the appbook service and return the result as a String
	@GetMapping("/associates")
	public List<Associate> getAssociates();

}
