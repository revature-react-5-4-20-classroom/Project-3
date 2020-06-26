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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema = "project3",name = "skillset")
public class Skillset {
  
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
  @JsonIgnoreProperties({"clientDemandSkillset", "quantity", "deadline", "client_demand_id", "client"})
  @OneToOne(mappedBy = "clientDemandSkillset")
  private ClientDemand clientDemand;  
  
  // SkillSet to Curriculum
  @JsonIgnoreProperties({"curriculumSkillset", "batch", "location", "associates", "consent"})
  @OneToOne(mappedBy = "curriculumSkillset")
  private Curriculum curriculum;

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

public ClientDemand getClientDemand() {
	return clientDemand;
}

public void setClientDemand(ClientDemand clientDemand) {
	this.clientDemand = clientDemand;
}

public Curriculum getCurriculum() {
	return curriculum;
}

public void setCurriculum(Curriculum curriculum) {
	this.curriculum = curriculum;
}

@Override
public String toString() {
	return "Skillset [skillSetId=" + skillSetId + ", skillSetName=" + skillSetName + ", skills=" + skills
			+ ", trainers=" + trainers + ", clientDemand=" + clientDemand + ", curriculum=" + curriculum + "]";
}

public Skillset(Integer skillSetId, String skillSetName, List<Skills> skills, List<Trainer> trainers,
		ClientDemand clientDemand, Curriculum curriculum) {
	super();
	this.skillSetId = skillSetId;
	this.skillSetName = skillSetName;
	this.skills = skills;
	this.trainers = trainers;
	this.clientDemand = clientDemand;
	this.curriculum = curriculum;
}

public Skillset() {
	super();
	// TODO Auto-generated constructor stub
}




 
}
