package com.revature.pkg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.pkg.repository.ClientRepository;


@Service
public class ClientService {

  @Autowired
  ClientRepository clientData;

}
