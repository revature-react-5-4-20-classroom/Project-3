package com.revature.DataService.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema = "project3",name = "skillset")
public class Skillset {
  
	
	



public Skillset() {
		super();
		// TODO Auto-generated constructor stub
	}

public Skillset(Integer skillSetId, String skillSetName, List<Skills> skills, List<Trainer> trainers,
			List<ClientDemand> clientDemands, List<Curriculum> curricula) {
		super();
		this.skillSetId = skillSetId;
		this.skillSetName = skillSetName;
		this.skills = skills;
		this.trainers = trainers;
		this.clientDemands = clientDemands;
		this.curricula = curricula;
	}


@Id
  @Column(name = "skillset_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer skillSetId;
  
  @Column(name = "name")
  private String skillSetName;
  
  // Skills to SkillSet
  @JsonIgnoreProperties({"skillSets"})
  @ManyToMany(cascade=CascadeType.ALL)
  @JoinTable(name="skillsetskills",schema = "project3",joinColumns=@JoinColumn(name="skillset_id"),inverseJoinColumns=@JoinColumn(name="skill_id") )
  private List<Skills> skills; 

  // SkillSet to Trainer currently only show the trainer id
  @JsonIgnoreProperties({"trainerSkills", "firstName", "lastName", "email", "consent", "batches"})
  @ManyToMany(cascade=CascadeType.ALL)
  @JoinTable(name="trainerskills", schema="project3",joinColumns=@JoinColumn(name="skillset_id"),inverseJoinColumns=@JoinColumn(name="trainer_id"))
  private List<Trainer> trainers;
  
  

  // SkillSet to ClientDemand
  @JsonIgnoreProperties({"clientDemandSkillset", "quantity", "deadline"})
  @OneToMany(mappedBy = "clientDemandSkillset")
  private List<ClientDemand> clientDemands;  
  
  

  // SkillSet to Curriculum
  @JsonIgnoreProperties({"curriculumSkillset", "batch", "location", "associates", "consent"})
  @OneToMany(mappedBy = "curriculumSkillset")
  private List<Curriculum> curricula;

public Integer getSkillSetId() {
	return skillSetId;
}

public void setSkillSetId(Integer skillSetId) {
	this.skillSetId = skillSetId;
}

public String getSkillSetName() {
	return skillSetName;
}

public void setSkillSetName(String skillSetName) {
	this.skillSetName = skillSetName;
}

public List<Skills> getSkills() {
	return skills;
}

public void setSkills(List<Skills> skills) {
	this.skills = skills;
}

public List<Trainer> getTrainers() {
	return trainers;
}

public void setTrainers(List<Trainer> trainers) {
	this.trainers = trainers;
}



public List<ClientDemand> getClientDemands() {
	return clientDemands;
}

public void setClientDemands(List<ClientDemand> clientDemands) {
	this.clientDemands = clientDemands;
}

public List<Curriculum> getCurricula() {
	return curricula;
}

public void setCurricula(List<Curriculum> curricula) {
	this.curricula = curricula;
}

@Override
public String toString() {
	return "Skillset [skillSetId=" + skillSetId + ", skillSetName=" + skillSetName + ", skills=" + skills
			+ ", trainers=" + trainers + ", clientDemands=" + clientDemands + ", curricula=" + curricula + "]";
}






 
}
