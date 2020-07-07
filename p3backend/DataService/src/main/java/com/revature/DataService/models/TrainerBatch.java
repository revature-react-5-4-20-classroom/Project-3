package com.revature.DataService.models;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@IdClass(TrainerBatchId.class)
@Table(schema = "project3", name = "trainerbatch")

public class TrainerBatch {


  @Id
  @Column(name = "trainer_id")
  //@GeneratedValue(strategy = GenerationType.IDENTITY)//caused: could not insert trainerId into jump table.
  private Integer trainerId;
  
  @Id
  @Column(name = "batch_id")
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

  public TrainerBatch(Integer trainerId, Integer batchId) {
    super();
    this.trainerId = trainerId;
    this.batchId = batchId;
  }
  
  public TrainerBatch() {
    super();
    
  }

  @Override
  public String toString() {
    return "TrainerBatch [trainerId=" + trainerId + ", batchId=" + batchId + "]";
  }
  
  
  
  


 

  


  



}
