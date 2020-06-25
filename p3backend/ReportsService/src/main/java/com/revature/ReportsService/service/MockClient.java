package com.revature.ReportsService.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Client;


@Service
public class MockClient {

  public List<Client> clients;

  public MockClient() {
    super();
  }

  public List<Client> getClients() {
    return clients;
  }
  
  public Client getClientById(Integer id) {
    Client out = null;
    for (Client c : this.clients) {
      if (c.getClientId().equals(id)) {
        out = c;
        break;
      }
    }
    if (out == null) {
      throw new RuntimeException("Skillset with " + id + " not found");
    }
    return out;
  }
  
  
}
