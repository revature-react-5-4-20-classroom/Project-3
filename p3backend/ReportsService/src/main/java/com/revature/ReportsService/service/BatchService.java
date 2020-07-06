package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.Batch;


@Service
@Primary
public class BatchService {
  public List<Batch> getAll() {
    // return open feign grab to the dataService endpoint for all
    return new MockBatch().getBatches();
  }

  public Batch getByID(Integer id) {
    // return open feign grab to the dataService endpoint for one
    return new MockBatch().getBatchById(id);
  }
}
