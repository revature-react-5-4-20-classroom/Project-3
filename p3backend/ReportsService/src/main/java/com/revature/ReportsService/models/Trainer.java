package com.revature.ReportsService.models;

public class Trainer {

  private Integer id;
  private String firstName;
  private String lastName;
  private String email;
  private Integer batchId;
  protected Integer getId() {
    return id;
  }
  protected void setId(Integer id) {
    this.id = id;
  }
  protected String getFirstName() {
    return firstName;
  }
  protected void setFirstName(String firstName) {
    this.firstName = firstName;
  }
  protected String getLastName() {
    return lastName;
  }
  protected void setLastName(String lastName) {
    this.lastName = lastName;
  }
  protected String getEmail() {
    return email;
  }
  protected void setEmail(String email) {
    this.email = email;
  }
  protected Integer getBatchId() {
    return batchId;
  }
  protected void setBatchId(Integer batchId) {
    this.batchId = batchId;
  }
  
  
}
