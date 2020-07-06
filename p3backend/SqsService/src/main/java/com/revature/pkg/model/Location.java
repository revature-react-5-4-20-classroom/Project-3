package com.revature.pkg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(schema="proj3", name = "location")
public class Location {

	
	@Id
	  @Column(name = "location_id")
	private Integer locationId;
	  @Column(name = "location_name")
	private String locationName;
	  
	  public Location(Integer locationId, String locationName) {
		  super();
		  this.locationId = locationId;
		  this.locationName = locationName;
		  
		  
	  }
	  
	  public Location() {
		  super();
	  }
	  
	  
	public Integer getLocationId() {
		return locationId;
	}
	public void setLocationId(Integer locationId) {
		this.locationId = locationId;
	}
	public String getLocationName() {
		return locationName;
	}
	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}
	@Override
	public String toString() {
		return "Batch [locationId=" + locationId + ", locationName=" + locationName + "]";
	}
	  
	
	
	  
	  

	
}
