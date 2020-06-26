package com.revature.ReportsService.models;

import java.time.LocalDate;

public class ClientDemand {

  private Integer clientDemandId;
  private Integer quantity;
  private LocalDate deadline;
  
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
  

  
  
}
