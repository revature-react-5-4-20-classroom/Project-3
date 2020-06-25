package com.revature.DataService.models;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(schema = "project3",name = "skillset")
public class Skillset {
  
  @Id
  @Column(name = "skillset_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer skillSetId;
  
  @Column(name = "name")
  private String skillSetName;
  
  @ManyToMany
  @JoinTable(
      name = "skillset_skills",
      joinColumns = @JoinColumn(name = "skillset_id",referencedColumnName = "skillset_id"),
      inverseJoinColumns = @JoinColumn(name = "skill_id",referencedColumnName = "skill_id"))
  private List<Skills> skills;
  
  
  @ManyToMany(mappedBy = "skillsets")
  private List<Curriculum> curricula;
  
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

  public List<Skills> getSkills() {
    return skills;
  }

//  public void setSkills(List<Skillsgi> skills) {
//    this.skills = skills;
//  }

  public List<Curriculum> getCurricula() {
    return curricula;
  }

  public void setCurricula(List<Curriculum> curricula) {
    this.curricula = curricula;
  }

  
}
