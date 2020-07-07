package com.revature.ReportsService.models;

public class Curriculum {

  private Integer curriculumId;
  private String name;
  private Integer curriculumSkillsetId;

  public Curriculum(Integer curriculumId, String name, Integer curriculumSkillsetId) {
    super();
    this.curriculumId = curriculumId;
    this.name = name;
    this.curriculumSkillsetId = curriculumSkillsetId;
  }

  public Integer getCurriculumId() {
    return curriculumId;
  }

  public void setCurriculumId(Integer curriculumId) {
    this.curriculumId = curriculumId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getCurriculumSkillsetId() {
    return curriculumSkillsetId;
  }

  public void setCurriculumSkillsetId(Integer curriculumSkillsetId) {
    this.curriculumSkillsetId = curriculumSkillsetId;
  }



}
