package com.revature.DataService.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(schema = "project3", name = "trainer")
public class Trainer {
	
	@Id
	@Column(name="trainer_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer trainerId;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="email")
	private String email;
	
	@JoinColumn(name="current_batch")
	@OneToOne(fetch= FetchType.EAGER)
	private Integer currentBatch;
	
	//I'm not certain how this who skills thing will work yet
	//private skillset skills

  public Trainer() {
    super();
    // TODO Auto-generated constructor stub
  }

  public Trainer(Integer trainerId, String firstName, String lastName, String email,
      Integer currentBatch) {
    super();
    this.trainerId = trainerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.currentBatch = currentBatch;
  }

  public Integer getTrainerId() {
    return trainerId;
  }

  public void setTrainerId(Integer trainerId) {
    this.trainerId = trainerId;
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

  public Integer getCurrentBatch() {
    return currentBatch;
  }

  public void setCurrentBatch(Integer currentBatch) {
    this.currentBatch = currentBatch;
  }

  @Override
  public String toString() {
    return "Trainer [trainerId=" + trainerId + ", firstName=" + firstName + ", lastName=" + lastName
        + ", email=" + email + ", currentBatch=" + currentBatch + "]";
  }

	
}
