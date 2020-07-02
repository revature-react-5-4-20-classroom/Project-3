package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.TrainerBatch;

@Service
public class MockTrainerBatch {

  private List<TrainerBatch> trainerBatch;

  public MockTrainerBatch() {
    super();
  }

  public List<TrainerBatch> getTrainerBatchAll() {
    return trainerBatch;
  }

  public List<Integer> getTrainerBatchById(Integer id) {

    List<Integer> out = null;
    for (TrainerBatch i : trainerBatch) {
      if (i.getTrainerId().equals(id)) {
        out.add(i.getBatchId());

      }
    }
    if (out == null) {
      throw new RuntimeException("batches for trainer with  id " + id + " not found");
    }
    return out;
  }

}
