package com.revature.ReportsService.models;

public class SkillsetSkills {

  private Integer skillsetId;
  private Integer skillId;

  public SkillsetSkills(Integer skillsetId, Integer skillId) {
    super();
    this.skillsetId = skillsetId;
    this.skillId = skillId;
  }

  public Integer getSkillsetId() {
    return skillsetId;
  }

  public void setSkillsetId(Integer skillsetId) {
    this.skillsetId = skillsetId;
  }

  public Integer getSkillId() {
    return skillId;
  }

  public void setSkillId(Integer skillId) {
    this.skillId = skillId;
  }



}
