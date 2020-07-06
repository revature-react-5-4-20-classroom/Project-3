package com.revature.DataService.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
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
  private Boolean isApprovedColumn;

  // @Column(name = "trainer_id")
  // private Integer trainerId;


  // Working
  // Changing at Nick's request
  @JsonIgnoreProperties({"consent", "trainers"})
  @ManyToOne
  @JoinColumn(name = "batch_id")
  // @Column(name = "batch_id")
  private Batch batch;

  // Changing at Nick's request
  @JsonIgnoreProperties({"consent", "batches"})
  @ManyToOne
  @JoinColumn(name = "trainerId")
  // @Column(name="trainer_id")
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

  public Boolean getIsApprovedColumn() {
    return isApprovedColumn;
  }

  public void setIsApprovedColumn(Boolean isApprovedColumn) {
    this.isApprovedColumn = isApprovedColumn;
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

  public Consent(Integer consentId, Boolean isApprovedColumn, Batch batch, Trainer trainer) {
    super();
    this.consentId = consentId;
    this.isApprovedColumn = isApprovedColumn;
    this.batch = batch;
    this.trainer = trainer;
  }

  @Override
  public String toString() {
    return "Consent [consentId=" + consentId + ", isApprovedColumn=" + isApprovedColumn + ", batch="
        + batch + ", trainer=" + trainer + "]";
  }



}
