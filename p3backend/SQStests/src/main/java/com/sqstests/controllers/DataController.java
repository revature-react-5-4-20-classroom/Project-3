package com.sqstests.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sqstests.models.Data;
import com.sqstests.services.DataService;

@RestController
@RequestMapping("/")
public class DataController {
  @Autowired
  DataService service;
  
  @PostMapping
  public Data createData(@RequestBody Data data) {
    return service.create(data);
  }
}
