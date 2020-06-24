package com.revature.ReportsService.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class ClientDemand {

  @GetMapping("/test")
  public String sayHi() {
    return "Hello from Reports Service";
  }
  
  
}
