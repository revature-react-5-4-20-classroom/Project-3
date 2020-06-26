package com.revature.DataService.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema="project3",name="location")
public class Location {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="location_id")
	private Integer locationId;
	
	
	@Column(name="location_name")
	private String locationName;
	
	@JsonIgnoreProperties({"location", "trainers", "curriculum", "associates", "consent"})
	@OneToOne(mappedBy = "location")
	private Batch batch;

	public Integer getLocationId() {
		return locationId;
	}


	public void setLocationId(Integer locationId) {
		this.locationId = locationId;
	}


	public String getLocationName() {
		return locationName;
	}
	
	public Location() {
		
	}


	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}


	public Batch getBatch() {
		return batch;
	}


	public void setBatch(Batch batch) {
		this.batch = batch;
	}


	@Override
	public String toString() {
		return "Location [locationId=" + locationId + ", locationName=" + locationName + "]";
	}
	
	
	
	
	

}
