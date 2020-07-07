package com.revature.pkg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema="project3", name = "associate")
public class Associate {
	
	@Id
	  @Column(name = "associate_id")
	private Integer associateId;
	  @Column(name = "first_name")
	private String firstName;
	  @Column(name = "last_name")
	private String lastName;
	  @Column(name = "email")
	private String email;
	@Column(name = "active")
	private boolean active;
	@Column(name = "interview_score")
	private Float interviewScore;
	@Column(name = "assigned_batch_id")
	private Integer assignedBatchId;
	
	public Associate() {
		super();
	}
	
	public Associate(Integer associateId, String firstName, String lastName, String email,
			boolean active, float interviewScore, Integer assignedBatchId) {
		
		super();
		this.associateId = associateId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.active = active;
		this.interviewScore = interviewScore;
		this.assignedBatchId = assignedBatchId;
				
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
	public String getLast_name() {
		return lastName;
	}
	public void setLast_name(String last_name) {
		this.lastName = last_name;
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
	public Float getInterviewScore() {
		return interviewScore;
	}
	public void setInterviewScore(Float interviewScore) {
		this.interviewScore = interviewScore;
	}
	public Integer getAssigned_batch_id() {
		return assignedBatchId;
	}
	public void setAssigned_batch_id(Integer assigned_batch_id) {
		this.assignedBatchId = assigned_batch_id;
	}
	@Override
	public String toString() {
		return "Associate [associateId=" + associateId + ", firstName=" + firstName + ", last_name=" + lastName
				+ ", email=" + email + ", active=" + active + ", interviewScore=" + interviewScore
				+ ", assigned_batch_id=" + assignedBatchId + "]";
	}
	
	

}
