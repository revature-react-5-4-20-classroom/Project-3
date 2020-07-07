package com.revature.DataService.models;

import java.io.Serializable;

public class TrainerBatchId implements Serializable {

  
  
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

  public TrainerBatchId(Integer trainerId, Integer batchId) {
    super();
    this.trainerId = trainerId;
    this.batchId = batchId;
  }

  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((batchId == null) ? 0 : batchId.hashCode());
    result = prime * result + ((trainerId == null) ? 0 : trainerId.hashCode());
    return result;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    TrainerBatchId other = (TrainerBatchId) obj;
    if (batchId == null) {
      if (other.batchId != null)
        return false;
    } else if (!batchId.equals(other.batchId))
      return false;
    if (trainerId == null) {
      if (other.trainerId != null)
        return false;
    } else if (!trainerId.equals(other.trainerId))
      return false;
    return true;
  }
  
  public TrainerBatchId() {
    
  }
  
}
