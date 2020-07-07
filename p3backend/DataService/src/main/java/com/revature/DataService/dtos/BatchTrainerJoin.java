package com.revature.DataService.dtos;

import org.springframework.stereotype.Component;
import lombok.Data;

@Data
public class BatchTrainerJoin {
  
  
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
  
  
  public BatchTrainerJoin(Integer trainerId, Integer batchId) {
    super();
    this.trainerId = trainerId;
    this.batchId = batchId;
  }
  public BatchTrainerJoin() {
    
  }

}
