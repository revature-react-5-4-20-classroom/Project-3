package com.revature.pkg.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema="proj3", name = "consent")
public class Consent {
	
	  @Id
	  @Column(name = "consent_id")
	private Integer consentId;
	  @Column(name = "trainer_id")
	private Integer trainerId;
	  @Column(name = "consent")
	private Integer consent;
	  @Column(name = "consent_approved")
	private boolean consentApproved;
	  @Column(name = "trainer")
	private Integer trainer;
	  
	  
	  public Consent() {
			super();
		}
	  
	  
	  public Consent(Integer consentId, Integer trainerId, Integer consent,
			  boolean consentApproved, Integer trainer) {
		  super();
		  this.consentId = consentId;
		  this.trainerId = trainerId;
		  this.consent =consent;
		  this.consentApproved = consentApproved;
		  this.trainer = trainer;
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
	public Integer getConsent() {
		return consent;
	}
	public void setConsent(Integer consent) {
		this.consent = consent;
	}
	public boolean isConsentApproved() {
		return consentApproved;
	}
	public void setConsentApproved(boolean consentApproved) {
		this.consentApproved = consentApproved;
	}
	public Integer getTrainer() {
		return trainer;
	}
	public void setTrainer(Integer trainer) {
		this.trainer = trainer;
	}
	
	
	@Override
	public String toString() {
		return "Consent [consentId=" + consentId + ", trainerId=" + trainerId + ", consent=" + consent
				+ ", consentApproved=" + consentApproved + ", trainer=" + trainer + "]";
	}
	
	
	
	
	
	
	


}
