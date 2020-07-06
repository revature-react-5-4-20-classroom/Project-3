package com.revature.ReportsService.models;

public class Consent {

  private Integer consentId;
  private Integer trainerId;
  private Integer batchId;
  private Boolean consentApproved;

  public Consent(Integer consentId, Integer trainerId, Integer batchId, Boolean consentApproved) {
    super();
    this.consentId = consentId;
    this.trainerId = trainerId;
    this.batchId = batchId;
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

  public Boolean getConsentApproved() {
    return consentApproved;
  }

  public void setConsentApproved(Boolean consentApproved) {
    this.consentApproved = consentApproved;
  }



}
