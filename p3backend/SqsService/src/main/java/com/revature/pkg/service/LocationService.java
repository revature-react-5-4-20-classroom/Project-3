package com.revature.pkg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.pkg.repository.LocationRepository;


@Service
public class LocationService {

  @Autowired
  LocationRepository locationData;

}
