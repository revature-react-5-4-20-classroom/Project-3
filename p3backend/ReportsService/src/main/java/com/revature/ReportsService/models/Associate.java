package com.revature.ReportsService.models;

public class Associate {

  private Integer associateId;
  private String firstName;
  private String lastName;
  private String email;
  private Boolean active;
  private Integer interviewScore;
  private Integer assignedBatchId;
  
  protected Integer getAssociateId() {
    return associateId;
  }
  protected void setAssociateId(Integer associateId) {
    this.associateId = associateId;
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
  protected Boolean getActive() {
    return active;
  }
  protected void setActive(Boolean active) {
    this.active = active;
  }
  protected Integer getInterviewScore() {
    return interviewScore;
  }
  protected void setInterviewScore(Integer interviewScore) {
    this.interviewScore = interviewScore;
  }
  protected Integer getAssignedBatchId() {
    return assignedBatchId;
  }
  protected void setAssignedBatchId(Integer assignedBatchId) {
    this.assignedBatchId = assignedBatchId;
  }
}