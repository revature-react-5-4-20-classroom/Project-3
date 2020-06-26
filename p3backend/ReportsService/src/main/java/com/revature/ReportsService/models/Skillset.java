package com.revature.ReportsService.models;

public class Skillset {

  private Integer skillsetId;
  private String name;
  
  public Skillset(Integer skillsetId, String name) {
    super();
    this.skillsetId = skillsetId;
    this.name = name;
  }
  
  public Integer getSkillsetId() {
    return skillsetId;
  }
  public void setSkillsetId(Integer skillsetId) {
    this.skillsetId = skillsetId;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  
  
  
  
}
