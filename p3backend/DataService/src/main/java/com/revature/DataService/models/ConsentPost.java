package com.revature.DataService.models;

public class ConsentPost {

  
  private Integer trainerId;
  private Integer batchId;
  private Boolean isApprovedColumn;
  public Integer getTrainerId() {
    return trainerId;
  }
  public void setTrainerId(Integer trainerId) {
    this.trainerId = trainerId;
  }
  public Integer getBatchId() {
    return batchId;
  }
  public void setBatchId(Integer batchId) {
    this.batchId = batchId;
  }
  public Boolean getIsApprovedColumn() {
    return isApprovedColumn;
  }
  public void setIsApprovedColumn(Boolean isApproved) {
    this.isApprovedColumn = isApproved;
  }
  
  public ConsentPost() {
    super();
  }
  public ConsentPost(Integer trainerId, Integer batchId, Boolean isApproved) {
    super();
    this.trainerId = trainerId;
    this.batchId = batchId;
    this.isApprovedColumn = isApproved;
  }
  @Override
  public String toString() {
    return "ConsentPost [trainerId=" + trainerId + ", batchId=" + batchId + ", isApproved="
        + isApprovedColumn + "]";
  }
  
  
}
