package com.project3.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "project3", name = "consent")
public class Consent {

	
	@Id
	@Column(name= "consent_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer consentId;
	
	@Column(name="trainer_id")
	private Integer trainerId;
	
	@Column(name="is_approved")
	private boolean isApproved;
	
	@Column(name="batch_id")
	private Integer batchId;
	
	public Consent() {
		super();
		
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

	public boolean isApproved() {
		return isApproved;
	}

	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}

	public Integer getBatchId() {
		return batchId;
	}

	public void setBatchId(Integer batchId) {
		this.batchId = batchId;
	}

	public Consent(Integer consentId, Integer trainerId, boolean isApproved, Integer batchId) {
		super();
		this.consentId = consentId;
		this.trainerId = trainerId;
		this.isApproved = isApproved;
		this.batchId = batchId;
	}
	
	
	
}
