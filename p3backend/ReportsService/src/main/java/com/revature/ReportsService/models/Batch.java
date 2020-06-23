package com.revature.ReportsService.models;

import java.time.LocalDate;

public class Batch {

  private Integer id;
  private String curriculum;
  private LocalDate startDate;
  private LocalDate endDate;
  private Integer trainer;
  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }
  public String getCurriculum() {
    return curriculum;
  }
  public void setCurriculum(String curriculum) {
    this.curriculum = curriculum;
  }
  public LocalDate getStartDate() {
    return startDate;
  }
  public void setStartDate(LocalDate startDate) {
    this.startDate = startDate;
  }
  public LocalDate getEndDate() {
    return endDate;
  }
  public void setEndDate(LocalDate endDate) {
    this.endDate = endDate;
  }
  public Integer getTrainer() {
    return trainer;
  }
  public void setTrainer(Integer trainer) {
    this.trainer = trainer;
  }
  
  
}
