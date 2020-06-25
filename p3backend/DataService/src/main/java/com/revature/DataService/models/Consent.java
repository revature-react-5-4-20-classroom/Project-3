package com.revature.DataService.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(schema = "project3", name = "consent")
public class Consent {


  @Id
  @Column(name = "consent_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer consentId;

  @Column(name = "is_approved")
  private boolean isApproved;

  @OneToOne
  @JoinColumn(name = "batch_id")
  private Batch batch;

  @OneToOne
  @JoinColumn(name = "trainer_id")
  private Trainer trainer;

  public Consent() {
    super();

  }

  public Integer getConsentId() {
    return consentId;
  }

  public void setConsentId(Integer consentId) {
    this.consentId = consentId;
  }


  public Batch getBatch() {
    return batch;
  }

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

  @Override
  public String toString() {
    return "Consent [consentId=" + consentId + ", isApproved=" + isApproved + ", batch=" + batch
        + ", trainer=" + trainer + "]";
  }

  


}
