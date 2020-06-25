package com.revature.DataService.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema = "project3", name = "trainer")
public class Trainer implements Serializable {
	
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
	
	
//	@JoinColumn(name="current_batch")
//	@OneToOne(fetch= FetchType.EAGER)
//	private Integer currentBatch;
	
	@Column(name="trainer_skillset_id")
	private Integer trainerSkillsetId;
	
	@JsonIgnoreProperties({"trainer"})
	@OneToMany(mappedBy="trainer", cascade=CascadeType.MERGE)
//	@JoinColumn(name="trainer_skillset_id", referencedColumnName="skillset_id",insertable=false, updatable=false)
	private List<Skillset> trainerSkills;

	
	//I'm not certain how this who skills thing will work yet
	//private skillset skills

	@OneToOne(mappedBy = "trainer")
	private Consent consent;


public Trainer() {
    super();
    // TODO Auto-generated constructor stub
  }

public Trainer(Integer trainerId, String firstName, String lastName, String email,
    Integer trainerSkillsetId, List<Skillset> trainerSkills, Consent consent) {
  super();
  this.trainerId = trainerId;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.trainerSkillsetId = trainerSkillsetId;
  this.trainerSkills = trainerSkills;
  this.consent = consent;
}


public List<Skillset> getTrainerSkills() {
	return trainerSkills;
}


public void setTrainerSkills(List<Skillset> trainerSkills) {
	this.trainerSkills = trainerSkills;
}


public Integer getTrainerSkillsetId() {
	return trainerSkillsetId;
}

public void setTrainerSkillsetId(Integer trainerSkillsetId) {
	this.trainerSkillsetId = trainerSkillsetId;
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


  public Consent getConsent() {
    return consent;
  }

  public void setConsent(Consent consent) {
    this.consent = consent;
  }


  @Override
  public String toString() {
    return "Trainer [trainerId=" + trainerId + ", firstName=" + firstName + ", lastName=" + lastName
        + ", email=" + email + ", trainerSkillsetId=" + trainerSkillsetId + ", trainerSkills="
        + trainerSkills + ", consent=" + consent + "]";
  }




//  public Integer getCurrentBatch() {
//    return currentBatch;
//  }
//
//  public void setCurrentBatch(Integer currentBatch) {
//    this.currentBatch = currentBatch;
//  }

//  @Override
//  public String toString() {
//    return "Trainer [trainerId=" + trainerId + ", firstName=" + firstName + ", lastName=" + lastName
//        + ", email=" + email + ", currentBatch=" + currentBatch + "]";
//  }

	
}
