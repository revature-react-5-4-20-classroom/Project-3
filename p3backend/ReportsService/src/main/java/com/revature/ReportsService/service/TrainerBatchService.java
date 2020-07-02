package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.TrainerBatch;

@Service
@Primary
public class TrainerBatchService {

  public List<TrainerBatch> getAll() {
    // return open feign grab to the dataService endpoint for all
    return new MockTrainerBatch().getTrainerBatchAll();
  }

  public List<Integer> getByID(Integer id) {
    // return open feign grab to the dataService endpoint for one
    return new MockTrainerBatch().getTrainerBatchById(id);
  }

}
