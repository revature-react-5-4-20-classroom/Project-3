package com.revature.pkg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(schema="proj3", name = "trainerskills")
public class Trainerskills {

	
	@Id
	  @Column(name = "trainer_id")
	private Integer trainerId;
	  @Column(name = "skillset_id")
	private String skillSetId;
	  
	  public Trainerskills(Integer trainerId, String skillSetId) {
		  super();
		  this.trainerId = trainerId;
		  this.skillSetId = skillSetId;
		  
	  }
	  
	  public Trainerskills() {
		  super();
	  }
	  
	public Integer getTrainerId() {
		return trainerId;
	}
	public void setTrainerId(Integer trainerId) {
		this.trainerId = trainerId;
	}
	public String getSkillSetId() {
		return skillSetId;
	}
	public void setSkillSetId(String skillSetId) {
		this.skillSetId = skillSetId;
	}
	
	
	
	@Override
	public String toString() {
		return "Trainerskills [trainerId=" + trainerId + ", skillSetId=" + skillSetId + "]";
	}
	  
	  
	  
	  
	  
	  
	  
	
	  
	  
	  
	  
	
	  
	
	
	  
	  

	
}
