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
  
  @ManyToMany(cascade=CascadeType.ALL)
  @JoinTable(name="skillsetskills",schema = "project3",joinColumns=@JoinColumn(name="skillset_id"),inverseJoinColumns=@JoinColumn(name="skill_id") )
  @JsonIgnoreProperties({"skillSets"})
  private List<Skills> skills; 
  
//  @ManyToMany
//  @JoinTable(
//      name = "skillset_skills",
//      joinColumns = @JoinColumn(name = "skillset_id",referencedColumnName = "skillset_id"),
//      inverseJoinColumns = @JoinColumn(name = "skill_id",referencedColumnName = "skill_id"))
  
  @JsonIgnoreProperties({"trainerSkills"})
  @ManyToMany(cascade=CascadeType.ALL)
  @JoinTable(name="trainerskills", schema="project3",joinColumns=@JoinColumn(name="trainer_id"),inverseJoinColumns=@JoinColumn(name="skillset_id"))
  private List<Trainer> trainers;
  
// @JsonIgnoreProperties({"trainerSkills"})
// @ManyToOne
// @JoinColumn(name="skillset_id", referencedColumnName="trainer_skillset_id",insertable=false, updatable=false) //
// private Trainer trainer;
  
  @JsonIgnoreProperties({"skillset"})
  @OneToOne(mappedBy = "skillset")
  private Curriculum curriculum;
  
  public Skillset() {
    super();
  }

  public Skillset(Integer skillSetId, String skillSetName) {
    super();
    this.skillSetId = skillSetId;
    this.skillSetName = skillSetName;
  }

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


public Skillset(Integer skillSetId, String skillSetName, List<Skills> skills, List<Trainer> trainers,
		Curriculum curriculum) {
	super();
	this.skillSetId = skillSetId;
	this.skillSetName = skillSetName;
	this.skills = skills;
	this.trainers = trainers;
	this.curriculum = curriculum;
}

@Override
public String toString() {
	return "Skillset [skillSetId=" + skillSetId + ", skillSetName=" + skillSetName + ", skills=" + skills
			+ ", trainers=" + trainers + ", curriculum=" + curriculum + "]";
}

public List<Trainer> getTrainers() {
	return trainers;
}

public void setTrainers(List<Trainer> trainers) {
	this.trainers = trainers;
}

public List<Skills> getSkills() {
	return skills;
}

public void setSkills(List<Skills> skills) {
	this.skills = skills;
}

public Curriculum getCurriculum() {
	return curriculum;
}

public void setCurriculum(Curriculum curriculum) {
	this.curriculum = curriculum;
}
 
}
