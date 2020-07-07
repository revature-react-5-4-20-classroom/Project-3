package com.revature.pkg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(schema="project3", name = "trainerbatch")
public class Trainerbatch {

	
	@Id
	  @Column(name = "trainer_id")
	private Integer trainerId;
	  @Column(name = "batch_id")
	private Integer batchId;
	  
	  public Trainerbatch(Integer trainerId, Integer batchId) {
		  super();
		  this.trainerId = trainerId;
		  this.batchId = batchId;
		  
	  }
	  
	  public Trainerbatch() {
		  super();
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
	
	
	
	@Override
	public String toString() {
		return "Trainerbatch [trainerId=" + trainerId + ", batchId=" + batchId + "]";
	}
	  
	  
	  
	  
	
	  
	
	
	  
	  

	
}
