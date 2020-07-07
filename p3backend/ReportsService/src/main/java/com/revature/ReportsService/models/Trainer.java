package com.revature.ReportsService.models;

public class Trainer {

  private Integer trainerId;
  private String firstName;
  private String lastName;
  private String email;

  public Trainer(Integer trainerId, String firstName, String lastName, String email) {
    super();
    this.trainerId = trainerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  public Integer getTrainerId() {
    return trainerId;

  }

  public void setTrainerId(Integer trainerId) {
    this.trainerId = trainerId;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }



}
