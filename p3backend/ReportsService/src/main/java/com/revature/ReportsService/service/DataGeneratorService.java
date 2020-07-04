package com.revature.ReportsService.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Associate;

@Service
public class DataGeneratorService {

  // public List<ArrayList<Associate>> associates; // associates available

  // public MockBatch batches = new MockBatch();// Batches needed - sorted by
  // required interview score in increasing order
  // public MockAssociate associate = new MockAssociate();// Single associate
  // sorted bye interview score in increasing order
  // public MockClientDemand cDemands = new MockClientDemand(); //# of people
  // needed for given roles from clients
  // public Integer interviewScoreForBatch = 75;

  private List<Associate> associatesInOneBatch;

  public List<Associate> generateBatch(Double interviewScore, int quantity, List<Associate> aList) {
    associatesInOneBatch = new ArrayList<Associate>();
    // associatesInOneBatch = null;

    for (Associate a : aList) {
      // System.out.println("a.getInterviewScore()" + a.getInterviewScore());
      // System.out.println("quantity" + quantity);
      if (a.getAssignedBatchId() == null && a.getActive() == true) {
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
