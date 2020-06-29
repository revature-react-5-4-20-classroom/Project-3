package com.revature.DataService.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema = "project3", name = "consent")
public class Consent {


  @Id
  @Column(name = "consent_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer consentId;

  @Column(name = "consent_approved")
  private boolean isApproved;

// Working
//  @JsonIgnoreProperties({"consent", "trainers"})
//  @ManyToOne
//  @JoinColumn(name = "batch_id")
  private Integer batchId;

//  @JsonIgnoreProperties({"consent", "batches"})
//  @OneToOne
//  @JoinColumn(name = "trainerId")
  private Integer trainerId;

  public Consent() {
    super();

  }

  public Integer getConsentId() {
    return consentId;
  }

  public void setConsentId(Integer consentId) {
    this.consentId = consentId;
  }
  
  


 

  public Integer getBatchId() {
	return batchId;
}

public void setBatchId(Integer batchId) {
	this.batchId = batchId;
}

public Integer getTrainerId() {
	return trainerId;
}

public void setTrainerId(Integer trainerId) {
	this.trainerId = trainerId;
}

public Consent(Integer consentId, boolean isApproved, Integer batchId, Integer trainerId) {
	super();
	this.consentId = consentId;
	this.isApproved = isApproved;
	this.batchId = batchId;
	this.trainerId = trainerId;
}

public boolean isApproved() {
    return isApproved;
  }

  public void setApproved(boolean isApproved) {
    this.isApproved = isApproved;
  }

@Override
public String toString() {
	return "Consent [consentId=" + consentId + ", isApproved=" + isApproved + ", batchId=" + batchId + ", trainerId="
			+ trainerId + "]";
}



  


}
