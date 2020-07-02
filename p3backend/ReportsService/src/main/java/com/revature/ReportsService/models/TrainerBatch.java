package com.revature.ReportsService.models;

public class TrainerBatch {

  private Integer trainerId;
  private Integer batchId;

  public TrainerBatch(Integer trainerId, Integer batchId) {
    super();
    this.trainerId = trainerId;
    this.batchId = batchId;
  }

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

}
