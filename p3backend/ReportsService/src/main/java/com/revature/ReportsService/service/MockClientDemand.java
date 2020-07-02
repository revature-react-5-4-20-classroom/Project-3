package com.revature.ReportsService.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import com.revature.ReportsService.models.Associate;
import com.revature.ReportsService.models.ClientDemand;



public class MockClientDemand {
  private List<ClientDemand> clientDemand;
  private Integer nextId;

  public MockClientDemand() {
    super();
    this.clientDemand = new ArrayList<ClientDemand>();
    this.clientDemand.add(new ClientDemand(1, 2, LocalDate.parse("2020-08-01"), 1, 1));
    this.clientDemand.add(new ClientDemand(2, 3, LocalDate.parse("2020-08-01"), 2, 2));
    this.clientDemand.add(new ClientDemand(3, 5, LocalDate.parse("2020-08-01"), 3, 3));
    this.nextId = 4;
  }

  public List<ClientDemand> getClientDemands() {
    return clientDemand;
  }

  public ClientDemand getClientDemandById(Integer id) {
    ClientDemand out = null;
    for (ClientDemand i : this.clientDemand) {
      if (i.getClientDemandId().equals(id)) {
        out = i;
        break;
      }
    }
    if (out == null) {
      throw new RuntimeException("batches with id " + id + " not found");
    }
    return out;
  }
}
