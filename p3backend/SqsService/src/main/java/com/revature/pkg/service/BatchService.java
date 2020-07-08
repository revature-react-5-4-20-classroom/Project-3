package com.revature.pkg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.pkg.model.Batch;
import com.revature.pkg.repository.BatchRepository;


@Service
public class BatchService {

  @Autowired
  BatchRepository batchData;
  

public List<Batch> getBatchInfo(Integer locationid,Integer curriculumid) {
	    return batchData.getBatchInfo(locationid, curriculumid);
	  }

public boolean checkBatchById(Integer id) {
    return batchData.getBatchInfoById(id).size() > 0;
  }

public List<Batch> getBatchInfoById(Integer id) {
    return batchData.getBatchInfoById(id);
  }

public List<Batch> getRandomBatchInfo() {
    return batchData.getRandomBatchInfo();
  }

}
