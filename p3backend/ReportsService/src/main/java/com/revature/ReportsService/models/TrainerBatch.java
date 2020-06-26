package com.revature.ReportsService.models;

public class TrainerBatch {
  
  private Integer trainerId;
  private Integer batchid;
  
  public TrainerBatch(Integer trainerId, Integer batchid) {
    super();
    this.trainerId = trainerId;
    this.batchid = batchid;
  }
  
  public Integer getTrainerId() {
    return trainerId;
  }
  public void setTrainerId(Integer trainerId) {
    this.trainerId = trainerId;
  }
  public Integer getBatchid() {
    return batchid;
  }
  public void setBatchid(Integer batchid) {
    this.batchid = batchid;
  }
  
  

}
