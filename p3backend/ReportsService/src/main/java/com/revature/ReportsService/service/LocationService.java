package com.revature.ReportsService.service;

import java.util.List;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Location;

@Service
@Primary
public class LocationService {

  
  public List<Location> getAll() {
    return new MockLocation().getLocations();
  }
  
  public Location getById(Integer id) {
    return new MockLocation().getLocationById(id);
  }
}
