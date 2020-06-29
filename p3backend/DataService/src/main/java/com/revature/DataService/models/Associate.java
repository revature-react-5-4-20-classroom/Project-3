package com.revature.DataService.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema = "project3", name = "associate")
public class Associate {
	
	@Id
	@Column(name= "associate_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer associateId;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="email")
	private String email;
	
	@Column(name="active")
	private boolean active;
	
	@Column(name="interview_score")
	private double interviewScore;
	

	// Associate to Batch
	@ManyToOne
	@JoinColumn(name="assigned_batch_id")
	@JsonIgnoreProperties({"associate", "trainers", "curriculum", "location", "consent"})
	private Batch batch;

	public Associate() {
		super();
		
	}
	
	public Associate(Integer associateId, String firstName, String lastName, String email,
		boolean active, double interviewScore, Batch batch) {
	    super();
	    this.associateId = associateId;
	    this.firstName = firstName;
	    this.lastName = lastName;
	    this.email = email;
	    this.active = active;
	    this.interviewScore = interviewScore;
	    this.batch = batch;
	  }

	
  public Integer getAssociateId() {
		return associateId;
	}

	public void setAssociateId(Integer associateId) {
		this.associateId = associateId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public double getInterviewScore() {
		return interviewScore;
	}

	public void setInterviewScore(double interviewScore) {
		this.interviewScore = interviewScore;
	}

	public Batch getBatch() {
		return batch;
	}

	public void setBatch(Batch batch) {
		this.batch = batch;
	}

@Override
  public String toString() {
    return "Associate [associateId=" + associateId + ", firstName=" + firstName + ", lastName="
        + lastName + ", email=" + email + ", active=" + active + ", interviewScore="
        + interviewScore + ", batch=" + batch + "]";
  }


	
	
}
