package com.revature.ReportsService.models;

import java.time.LocalDate;

public class ClientDemand {

  private Integer id;
  private Integer quantity;
  private LocalDate deadline;
  protected Integer getId() {
    return id;
  }
  protected void setId(Integer id) {
    this.id = id;
  }
  protected Integer getQuantity() {
    return quantity;
  }
  protected void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }
  protected LocalDate getDeadline() {
    return deadline;
  }
  protected void setDeadline(LocalDate deadline) {
    this.deadline = deadline;
  }
  
  
}
