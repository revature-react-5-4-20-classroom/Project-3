package com.revature.DataService.dtos;

import lombok.Data;

@Data
public class UpdateBatchDto {

  private Boolean isConfirmed;

  public UpdateBatchDto() {
    super();
  }

  public UpdateBatchDto(Integer batchId, Boolean isConfirmed) {
    super();
    this.isConfirmed = isConfirmed;
  }

  public Boolean getIsConfirmed() {
    return isConfirmed;
  }

  public void setIsConfirmed(Boolean isConfirmed) {
    this.isConfirmed = isConfirmed;
  }



}
