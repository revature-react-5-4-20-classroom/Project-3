package com.revature.DataService.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
  // Changing at Nick's request
//  @JsonIgnoreProperties({"consent", "trainers"})
//  @ManyToOne
//  @JoinColumn(name = "batch_id")
  @Column(name = "batch_id")
  private Integer batchId;

  	// Changing at Nick's request
//  @JsonIgnoreProperties({"consent", "batches"})
//  @ManyToOne
//  @JoinColumn(name = "trainerId")
  @Column(name="trainer_id")

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

<<<<<<< HEAD
=======
  public boolean isApproved() {

    return isApproved;
  }

  public void setApproved(boolean isApproved) {
    this.isApproved = isApproved;
  }


  public Consent(Integer consentId, boolean isApproved, Integer batchid, Integer trainerId) {
    super();
    this.consentId = consentId;
    this.isApproved = isApproved;
    this.batchId = batchId;
    this.trainerId = trainerId;
  }

public Integer getBatchId() {
	return batchId;
}
>>>>>>> bb60357103cea1e0a9c0044f611b3cb0480af129

  public Batch getBatch() {
    return batch;
  }

<<<<<<< HEAD
  public void setBatch(Batch batch) {
    this.batch = batch;
  }

  public Trainer getTrainer() {
    return trainer;
  }

  public void setTrainer(Trainer trainer) {
    this.trainer = trainer;
  }

  public boolean isApproved() {
    return isApproved;
  }

  public void setApproved(boolean isApproved) {
    this.isApproved = isApproved;
  }

  public Consent(Integer consentId, boolean isApproved, Batch batch, Trainer trainer) {
    super();
    this.consentId = consentId;
    this.isApproved = isApproved;
    this.batch = batch;
    this.trainer = trainer;
  }
=======
public Integer getTrainer_id() {
	return trainerId;
}

public void setTrainer_id(Integer trainerId) {
	this.trainerId = trainerId;
}

@Override
public String toString() {
	return "Consent [consentId=" + consentId + ", isApproved=" + isApproved + ", batchId=" + batchId + ", trainerId="
			+ trainerId + "]";
}

>>>>>>> bb60357103cea1e0a9c0044f611b3cb0480af129

  @Override
  public String toString() {
    return "Consent [consentId=" + consentId + ", isApproved=" + isApproved + ", batch=" + batch
        + ", trainer=" + trainer + "]";
  }

  


}
