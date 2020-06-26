package com.revature.ReportsService.models;

public class TrainerSkills {
  
  private Integer trainerId;
  private Integer skillsetId;
  
  public TrainerSkills(Integer trainerId, Integer skillsetId) {
    super();
    this.trainerId = trainerId;
    this.skillsetId = skillsetId;
  }
  
  public Integer getTrainerId() {
    return trainerId;
  }
  public void setTrainerId(Integer trainerId) {
    this.trainerId = trainerId;
  }
  public Integer getSkillsetId() {
    return skillsetId;
  }
  public void setSkillsetId(Integer skillsetId) {
    this.skillsetId = skillsetId;
  }
  
  
}
