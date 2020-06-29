package com.revature.ReportsService.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Location;
import com.revature.ReportsService.models.Skills;

@Service
public class MockLocation {

  public List<Location> locations;
  
  public MockLocation() {
    super();
    this.locations = new ArrayList<Location>();
    this.locations.add(new Location(1,"Reston"));  
    this.locations.add(new Location(2,"New York"));
    this.locations.add(new Location(3,"Dallas")); 
    this.locations.add(new Location(4,"Tempa")); 
  }
  
  public List<Location> getLocations() {
    return locations;
  }
  
  public Location getLocationById(Integer id) {
    Location out = null;
    for(Location l: this.locations) {
      if (l.getLocationId().equals(id)) {
        out = l;
        break;
      }
    }
    if (out == null) {
      throw new RuntimeException("Location with the id " + id + " not found");
    }
    return out;
  }
  
}
