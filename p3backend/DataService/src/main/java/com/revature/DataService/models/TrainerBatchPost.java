package com.revature.DataService.models;

public class TrainerBatchPost {
  private Integer trainerId;
  private Integer batchId;
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
  public TrainerBatchPost() {
    super();
   
  }
  public TrainerBatchPost(Integer trainerId, Integer batchId) {
    super();
    this.trainerId = trainerId;
    this.batchId = batchId;
  }
  @Override
  public String toString() {
    return "TrainerBatchPost [trainerId=" + trainerId + ", batchId=" + batchId + "]";
  }
  
  
  
  
}
