package com.revature.ReportsService.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Client;


@Service
public class MockClient {

  public List<Client> clients;
  private Integer nextId;

  public MockClient() {
    super();
    this.clients = new ArrayList<Client>();
    this.clients.add(new Client(1, "Sony"));
    this.clients.add(new Client(2, "JP Morgan"));
    this.clients.add(new Client(3, "Chase"));
    this.clients.add(new Client(4, "Wells Fargo"));
    this.nextId = 5;
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
