package com.revature.ReportsService.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Location;

@Service
public class MockLocation {

  public List<Location> locations;

  public MockLocation() {
    super();
  }

  public List<Location> getLocations() {
    return locations;
  }

  public Location getLocationById(Integer id) {
    Location out = null;
    for (Location l : this.locations) {
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
