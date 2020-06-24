package com.project3.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "project3", name = "associate")
public class Associate {

	
	public Associate() {
		super();
		
	}
	
	
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

	public Associate(Integer associateId, String firstName, String lastName, String email, boolean active,
			double interviewScore) {
		super();
		this.associateId = associateId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.active = active;
		this.interviewScore = interviewScore;
	}

	@Override
	public String toString() {
		return "Associate [associateId=" + associateId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", email=" + email + ", active=" + active + ", interviewScore=" + interviewScore + "]";
	}
	
	
}
