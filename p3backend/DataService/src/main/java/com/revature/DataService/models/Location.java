package com.revature.DataService.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema = "project3", name = "location")
public class Location {

  public Location() {
    super();
  }

  public Location(Integer locationId, String locationName, List<Batch> batches) {
    super();
    this.locationId = locationId;
    this.locationName = locationName;
    this.batches = batches;
  }



  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "location_id")
  private Integer locationId;


  @Column(name = "location_name")
  private String locationName;


  // Location to Batches
  @JsonIgnoreProperties({"location", "trainers", "curriculum", "associates", "consent"})
  @OneToMany(mappedBy = "location")
  private List<Batch> batches;


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


  public List<Batch> getBatches() {
    return batches;
  }


  public void setBatches(List<Batch> batches) {
    this.batches = batches;
  }

  @Override
  public String toString() {
    return "Location [locationId=" + locationId + ", locationName=" + locationName + ", batches="
        + batches + "]";
  }



}
