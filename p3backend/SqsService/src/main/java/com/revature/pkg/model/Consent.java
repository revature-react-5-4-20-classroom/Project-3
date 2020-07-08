package com.revature.pkg.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema="project3", name = "consent")
public class Consent {
	
	  @Id
	  @Column(name = "consent_id")
	private Integer consentId;
	  @Column(name = "trainer_id")
	private Integer trainerId;
	  @Column(name = "batch_id")
	private Integer batchId;
	  @Column(name = "consent_approved")
	private boolean consentApproved;

	  

	  
	  public Consent() {
			super();
		}
	  
	  
	  public Consent(Integer consentId, Integer trainerId, Integer batchId,
			  boolean consentApproved) {
		  super();
		  this.consentId = consentId;
		  this.trainerId = trainerId;
		  this.batchId =batchId;
		  this.consentApproved = consentApproved;
	  }


	public Integer getConsentId() {
		return consentId;
	}


	public void setConsentId(Integer consentId) {
		this.consentId = consentId;
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


	public boolean isConsentApproved() {
		return consentApproved;
	}


	public void setConsentApproved(boolean consentApproved) {
		this.consentApproved = consentApproved;
	}


	@Override
	public String toString() {
		return "Consent [consentId=" + consentId + ", trainerId=" + trainerId + ", batchId=" + batchId
				+ ", consentApproved=" + consentApproved + "]";
	}
	  
	
	
	
	
	
	
	
	
	


}
