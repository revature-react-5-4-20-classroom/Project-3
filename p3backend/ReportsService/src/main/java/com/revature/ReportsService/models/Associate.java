package com.revature.ReportsService.models;

public class Associate {

  private Integer associateId;
  private String firstName;
  private String lastName;
  private String email;
  private Boolean active;
  private Double interviewScore;
  private Batch batch;

  public Associate(Integer associateId, String firstName, String lastName, String email,
      Boolean active, Double interviewScore, Batch assignedBatchId) {
    super();
    this.associateId = associateId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.active = active;
    this.interviewScore = interviewScore;
    this.batch = assignedBatchId;
  }

  public Integer getAssociateId() {
    return associateId;
  }

  public void setAssociateId(Integer associateId) {
    this.associateId = associateId;
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

  public Boolean getActive() {
    return active;
  }

  public void setActive(Boolean active) {
    this.active = active;
  }

  public Double getInterviewScore() {
    return interviewScore;
  }

  public void setInterviewScore(Double interviewScore) {
    this.interviewScore = interviewScore;
  }

  public Batch getAssignedBatchId() {
    return batch;
  }

  public void setAssignedBatchId(Batch assignedBatchId) {
    this.batch = assignedBatchId;
  }
}
