package com.revature.ReportsService.service;

import java.util.List;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Client;

@Service
@Primary
public class ClientService {

  public List<Client> getAll() {
    // return openfigen grab to the dataserve endpoint for all
    return new MockClient().getClients();
  }
  
  public Client getById(Integer id) {
    // return openfeign grab to the dataservde endpoint for one
    return new MockClient().getClientById(id);
  }
}
