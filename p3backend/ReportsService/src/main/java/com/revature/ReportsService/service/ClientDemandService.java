package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.ClientDemand;

@Service
@Primary
public class ClientDemandService {

  public List<ClientDemand> getAll() {
    // return open feign grab to the dataService endpoint for all
    return new MockClientDemand().getClientDemands();
  }

  public ClientDemand getByID(Integer id) {
    // return open feign grab to the dataService endpoint for one
    return new MockClientDemand().getClientDemandById(id);
  }

}
