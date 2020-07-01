package com.sqstests.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sqstests.models.Data;
import com.sqstests.repositories.DataRepository;

@Service
public class DataService {
  @Autowired
  DataRepository dr;
  
  public Data create(Data data) {
    data.setId(0);
    return dr.save(data);
  }
}
