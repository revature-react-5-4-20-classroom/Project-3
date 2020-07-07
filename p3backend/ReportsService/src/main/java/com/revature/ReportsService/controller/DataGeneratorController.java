package com.revature.ReportsService.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.revature.ReportsService.DataGetterFeign;
import com.revature.ReportsService.models.Associate;
import com.revature.ReportsService.service.DataGeneratorService;

@RestController
public class DataGeneratorController {

  @Autowired
  DataGetterFeign dataGetterFeign;

  @Autowired
  DataGeneratorService dataGeneratorService;

  @GetMapping("datagetter/{interviewScore}/{quantity}")
  public List<Associate> getData(@PathVariable Double interviewScore, @PathVariable int quantity) {
    List<Associate> associatesList = dataGetterFeign.getAssociates();

    return dataGeneratorService.generateBatch(interviewScore, quantity, associatesList);

  }

  @GetMapping("/hello")
  public String hello() {

    return "hello frontend";
  }

}
