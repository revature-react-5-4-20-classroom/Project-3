package com.revature.ReportsService.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Associate;

@Service
public class DataGeneratorService {

  private List<Associate> associatesInOneBatch;

  public List<Associate> generateBatch(Double interviewScore, int quantity, List<Associate> aList) {
    associatesInOneBatch = new ArrayList<Associate>();
    for (Associate a : aList) {
      if (a.getAssignedBatchId() == null) {
        if (a.getInterviewScore() > interviewScore) {
          if (associatesInOneBatch.size() < quantity) {
            associatesInOneBatch.add(a);
          }
        }
      }
    }
    return associatesInOneBatch;
  }

}
