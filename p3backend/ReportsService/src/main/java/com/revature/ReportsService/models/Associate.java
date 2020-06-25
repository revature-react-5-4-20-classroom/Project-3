package com.revature.ReportsService.models;

public class Associate {

	private Integer id;
	private String firstName;
	private String lastName;
	private String email;
	private Boolean active;
	private Integer interviewScore;
	private Integer batchId;

	public Associate(Integer id, String firstName, String lastName, String email, Boolean active,
			Integer interviewScore, Integer batchId) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.active = active;
		this.interviewScore = interviewScore;
		this.batchId = batchId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Integer getInterviewScore() {
		return interviewScore;
	}

	public void setInterviewScore(Integer interviewScore) {
		this.interviewScore = interviewScore;
	}

	public Integer getBatchId() {
		return batchId;
	}

	public void setBatchId(Integer batchId) {
		this.batchId = batchId;
	}

}
