package com.revature.ReportsService.models;

import java.time.LocalDate;

public class ClientDemand {

  private Integer clientDemandId;
  private Integer quantity;
  private LocalDate deadline;
  private Integer clientId;
  private Integer skillsetId;

  public ClientDemand(Integer clientDemandId, Integer quantity, LocalDate deadline,
      Integer clientId, Integer skillsetId) {
    super();
    this.clientDemandId = clientDemandId;
    this.quantity = quantity;
    this.deadline = deadline;
    this.clientId = clientId;
    this.skillsetId = skillsetId;
  }

  public Integer getClientDemandId() {
    return clientDemandId;
  }

  public void setClientDemandId(Integer clientDemandId) {
    this.clientDemandId = clientDemandId;
  }

  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public LocalDate getDeadline() {
    return deadline;
  }

  public void setDeadline(LocalDate deadline) {
    this.deadline = deadline;
  }

  public Integer getClientId() {
    return clientId;
  }

  public void setClientId(Integer clientId) {
    this.clientId = clientId;
  }

  public Integer getSkillsetId() {
    return skillsetId;
  }

  public void setSkillsetId(Integer skillsetId) {
    this.skillsetId = skillsetId;
  }



}
