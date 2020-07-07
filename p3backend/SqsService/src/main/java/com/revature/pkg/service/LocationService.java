package com.revature.pkg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.pkg.model.Location;
import com.revature.pkg.repository.LocationRepository;


@Service
public class LocationService {

  @Autowired
  LocationRepository locationData;
  
  public Boolean checkLocation(String name) {
	    return locationData.checkLocation(name).size() > 0;
	  }
  
  public List<Location> getLocationInfo(String name) {
	    return locationData.checkLocation(name);
	  }

}
