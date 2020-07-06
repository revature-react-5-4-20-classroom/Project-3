package com.revature.pkg.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(schema="proj3", name = "trainer")
public class Trainer {

	
	@Id
	  @Column(name = "trainer_id")
	private Integer trainerId;
	  @Column(name = "first_name")
	private String firstName;
	  @Column(name = "last_name")
	private String lastName;
	  @Column(name = "email")
	private String email;
	@Column(name = "is_eligible")
	private boolean isEligible;
	
	public Trainer(Integer trainerId, String firstName, String lastName,
			String email, boolean isEligible){
		super();
		this.trainerId = trainerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.isEligible = isEligible;	
		
	}
	
	public Trainer() {
		super();
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
	public boolean isEligible() {
		return isEligible;
	}
	public void setEligible(boolean isEligible) {
		this.isEligible = isEligible;
	}
	
	
	@Override
	public String toString() {
		return "Trainer [trainerId=" + trainerId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", isEligible=" + isEligible + "]";
	}
	
	
	

	
}
